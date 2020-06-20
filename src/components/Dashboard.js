import React, { Component } from 'react';
import MediaColumn from './MediaColumn';
import { fetchTrendingMedia, fetchGenres } from 'services/apiServices';
import { Grid } from '@material-ui/core';

export const DashboardContext = React.createContext();
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeWindow: 'day',
      movies: [],
      shows: [],
      genres: []
    };
  }
  fetchMovies = async () => {
    try {
      const { data } = await fetchTrendingMedia('movie', this.state.timeWindow);

      if (data && data.results) {
        return data.results;
      }
    } catch (error) {
      void 0;
    }
  };

  fetchShows = async () => {
    try {
      const { data } = await fetchTrendingMedia('tv', this.state.timeWindow);

      if (data && data.results) {
        return data.results;
      }
    } catch (error) {
      void 0;
    }
  };
  storeGenres = async () => {
    try {
      const { data } = await fetchGenres();

      if (data) {
        return data.genres;
      }
    } catch (error) {
      void 0;
    }
  };

  async componentDidMount() {
    const [movies, shows, genres] = await Promise.all([this.fetchMovies(), this.fetchShows(), this.storeGenres()]);

    this.setState({ movies: movies, shows: shows, genres: genres });
  }

  render() {
    return (
      <Grid container justify="center" alignItems="center" style={{ overflowY: 'hidden' }}>
        <DashboardContext.Provider value={this.state.genres}>
          <Grid item md={6}>
            {this.state.shows && <MediaColumn results={this.state.shows} title="Trending TV Shows" />}
          </Grid>
          <Grid item md={6}>
            {this.state.movies && <MediaColumn results={this.state.movies} title="Trending Movies" />}
          </Grid>
        </DashboardContext.Provider>
      </Grid>
    );
  }
}
export default Dashboard;
