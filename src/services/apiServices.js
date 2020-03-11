import http from '../utils/http';
import { projectConfig } from '../projectConfig';
import { interpolate } from '../utils/interpolate';


export async function fetchTrendingMedia(mediaType, timeWindow) {
  const url = interpolate(projectConfig.trendingUrl, {
    mediaType: mediaType,
    timeWindow: timeWindow
  });
  const response = await http.get(url);

  return response;
}
