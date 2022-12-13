import yaml from 'js-yaml';

const PARSERS = {
  '.json': (data) => JSON.parse(data),
  '.yaml': (data) => yaml.load(data),
  '.yml': (data) => yaml.load(data),
  '.txt': (data) => data.toString(),
};

/**
 * @description Returns parsed data
 * @param {any} data
 * @param {String} extension
 * @returns {any} Parsed data
 */
export default (data, extension) => {
  const parser = PARSERS[extension];
  const parsedData = parser(data);
  return parsedData;
};
