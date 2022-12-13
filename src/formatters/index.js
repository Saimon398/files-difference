import stylish from './stylish.js';
import plain from './plain.js';

const FORMATTERS = {
  stylish: (data) => stylish(data),
  plain: (data) => plain(data),
  json: (data) => JSON.stringify(data),
};

/**
 * @description Returns formatted data
 * @param {String} format Format of processing data
 * @param {Object {}} data Data to be formatted
 * @returns {String} Formatted data
 */
export default (format, data) => {
  const formatter = FORMATTERS[format];
  const formattedData = formatter(data);
  return formattedData;
};
