import React, { Component } from 'react';
import MediaColumn from './MediaColumn';
import { fetchTrendingMedia, fetchGenres } from 'services/apiServices';

export const DashboardContext = React.createContext();
class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			timeWindow: 'day',
			movies: [],
			shows: [],
			genres: [],
		};
	}
	fetchMovies = async () => {
		try {
			const { data } = await fetchTrendingMedia('movie', this.state.timeWindow);
			if (data && data.results) {
				return data.results;
			}
		} catch (error) {
			console.log(error);
		}
	};

	fetchShows = async () => {
		try {
			const { data } = await fetchTrendingMedia('tv', this.state.timeWindow);
			if (data && data.results) {
				return data.results;
			}
		} catch (error) {
			console.log(error);
		}
	};
	storeGenres = async () => {
		try {
			const { data } = await fetchGenres();
			if (data) {
				return data.genres;
			}
		} catch (error) {
			console.log(error);
		}
	};

	async componentDidMount() {
		const [movies, shows, genres] = await Promise.all([
			this.fetchMovies(),
			this.fetchShows(),
			this.storeGenres(),
		]);
		this.setState({ movies: movies, shows: shows, genres: genres });
	}

	render() {
		return (
			<div className="container d-flex">
				<DashboardContext.Provider value={this.state.genres}>
					{this.state.shows && (
						<MediaColumn results={this.state.shows} title="Trending TV Shows" />
					)}
					{this.state.movies && (
						<MediaColumn results={this.state.movies} title="Trending Movies" />
					)}
				</DashboardContext.Provider>
			</div>
		);
	}
}
export default Dashboard;
