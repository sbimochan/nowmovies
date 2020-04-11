const apiUrl = 'https://api.themoviedb.org/3';
const trendingUrl = '/trending';
const posterSize = '/w185';
const genres = '/genre/movie/list';


export const projectConfig = {
  apiURI : apiUrl,
  imgURL : 'https://image.tmdb.org/t/p' + posterSize,
  token : process.env.REACT_APP_API_TOKEN,
  trendingUrl: apiUrl + trendingUrl,
  genreUrl : apiUrl + genres
}