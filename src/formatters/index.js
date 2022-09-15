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
      return stylish(data);
    case 'plain':
      return plain(data);
    case 'json':
      return JSON.stringify(data);
    default:
      return stylish(data);
  }
};
