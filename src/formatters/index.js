import stylish from './stylish.js';

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
    default:
      return stylish(data);
  }
};
