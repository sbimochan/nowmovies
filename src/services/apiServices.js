import http from '../utils/http';
import { projectConfig } from '../projectConfig';


export async function fetchTrendingMedia(mediaType, timeWindow) {
  const url = `${projectConfig.trendingUrl}/${mediaType}/${timeWindow}`
  const response = await http.get(url);

  return response;
}

export async function fetchGenres() {
  const url = projectConfig.genreUrl;
  const response = await http.get(url);

  return response;
}
