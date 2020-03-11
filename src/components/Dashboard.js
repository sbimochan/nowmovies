import React, {Component} from 'react';
import MediaColumn from './MediaColumn';
import { fetchTrendingMedia } from 'src/services/apiServices';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeWindow: 'day',
      movies: {},
      shows: {}
    }
  }
  fetchMovies = async () => {
    try {
      const movieData = await fetchTrendingMedia('movie',this.state.timeWindow);
      console.log(movieData);
    } catch (error) {
      console.log(error)
    }
  }

  fetchShows = async () => {
    try {
      const movieData = await fetchTrendingMedia('tv',this.state.timeWindow);
      console.log(movieData);
    } catch (error) {
      console.log(error)
    }
  }
  componentDidMount() {
    Promise.all([this.fetchMovies(),this.fetchShows()])
  }

  render() {

    return (
      <div className="container">
        <MediaColumn/>
        <MediaColumn/>
      </div>

    )
  }

}
export default Dashboard;