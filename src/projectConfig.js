const trendingUrl = '/trending';
const posterSize = '/w185';
const genres = '/genre/movie/list';

export const projectConfig = {
  apiURI : process.env.REACT_APP_API_URL,
  imgURL : process.env.REACT_APP_IMG_URL + posterSize,
  token : process.env.REACT_APP_API_TOKEN,
  trendingUrl: process.env.REACT_APP_API_URL + trendingUrl,
  genreUrl : process.env.REACT_APP_API_URL + genres
}