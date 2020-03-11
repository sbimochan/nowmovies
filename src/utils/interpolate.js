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