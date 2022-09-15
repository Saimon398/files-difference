import stylish from './stylish.js';
import plain from './plain.js';

/**
 * @description Return formatted data
 * @param {Object} data
 * @param {String} format
 * @returns {String} Formatted data
 */
export default (data, format) => {
  switch (format) {
    case 'stylish':
      return stylish(data).toString();
    case 'plain':
      return plain(data).toString();
    case 'json':
      return JSON.stringify(data).toString();
    default:
      return stylish(data).toString();
  }
};
