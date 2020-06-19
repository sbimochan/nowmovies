import axios from 'axios';

import { projectConfig } from '../projectConfig';

const http = axios.create({
  baseURL: projectConfig.apiURI,
  headers: {
    'Content-Type': 'application/json'
  }
});

/**
 * HTTP request interceptor.
 */
http.interceptors.request.use((config) => {
  const accessToken = projectConfig.token;

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

export default http;
