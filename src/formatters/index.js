import { when } from 'pattern-matching-js';
import stylish from './stylish.js';
import plain from './plain.js';
/**
 * @description Return formatted data
 * @param {Object} data
 * @param {String} format
 * @returns {String} Formatted data
 */
export default (data, format) => {
  const formattedData = when(format)
    .case('stylish', () => stylish(data))
    .case('plain', () => plain(data))
    .case('json', () => JSON.stringify(data))
    .end();
  return formattedData;
};
