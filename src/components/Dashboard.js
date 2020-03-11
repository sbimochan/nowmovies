import React, {Component} from 'react';
import MediaColumn from './MediaColumn';
import {fetchTrendingMedia} from 'src/services/apiServices';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeWindow: 'day',
      movies: {},
      shows: {}
    }
  }
  fetchMovies = async() => {
    try {
      const { data } = await fetchTrendingMedia('movie', this.state.timeWindow);
      if (data && data.results) {
        return data.results;
      }
    } catch (error) {
      console.log(error)
    }
  }

  fetchShows = async() => {
    try {
      const { data } = await fetchTrendingMedia('tv', this.state.timeWindow);
      if (data && data.results) {
        return data.results;
      }
    } catch (error) {
      console.log(error)
    }
  }
  async componentDidMount() {
    const [movies, shows] = await Promise.all([
      this.fetchMovies(),
      this.fetchShows()
    ]);
    this.setState({movies: movies, shows: shows});
  }

  render() {

    return (
      <div className="container">
        {this.state.shows &&<MediaColumn results={this.state.shows} title='Trending TV Shows'/>}
        {this.state.movies && <MediaColumn results={this.state.movies} title='Trending Movies'/>}
      </div>

    )
  }

}
export default Dashboard;