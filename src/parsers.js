import yaml from 'js-yaml';
import { when } from 'pattern-matching-js';

/**
 * @description Parse file depending on the extension
 * @param {any} data
 * @param {String} extension
 * @returns {any} parsed data
 */
export default (data, extension) => {
  const parsedData = when(extension)
    .case('.json', () => JSON.parse(data))
    .case('.yaml', () => yaml.load(data))
    .case('.yml', () => yaml.load(data))
    .case('.txt', () => data.toString())
    .end();
  return parsedData;
};
