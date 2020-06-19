/* eslint-disable camelcase */
import { fetchExternalIds } from 'services/apiServices';

/**
 * Build supplied string by interpolating properties inside delimiters('{ }') with the given parameters.
 *
 * @example
 * interpolate(':name is here.', {name: 'Barbara'})
 * => 'Barbaba is here.'
 *
 * @param {string} str
 * @param {object} params
 * @returns {string}
 */
export function interpolate(str, params) {
  let formattedString = str;

  for (const [key, value] of Object.entries(params)) {
    const val = value || '';

    formattedString = formattedString.replace(new RegExp(':' + key, 'gi'), val.toString());
  }

  return formattedString;
}

export async function findImdbId(id, media_type) {
  const externalId = await fetchExternalIds(id, media_type);
  const imdbId = externalId.data.imdb_id;

  return imdbId;
}

export async function getImdbUrl(tmdbid, mediaType) {
  const imdbId = await findImdbId(tmdbid, mediaType);
  const url = 'https://imdb.com/title/' + imdbId;

  return url;
}

export function youtubeSearchQueryGenerator(mediaName) {
  return `https://www.youtube.com/results?search_query=${mediaName.replace(/ /g, '+')}+1080p+trailer`;
}

export function ytsQuery(mediaName) {
  return `https://yts.mx/browse-movies/${encodeURIComponent(mediaName.trim())}/all/all/0/latest/0/all`;
}
