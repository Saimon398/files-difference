import yaml from 'js-yaml';

/**
 * @description Parse file depending on the extension
 * @param {any} data
 * @param {String} extension
 * @returns {any} parsed data
 */
export default (data, extension) => {
  switch (extension) {
    case '.json':
      return JSON.parse(data);
    case '.yaml':
      return yaml.load(data);
    case '.yml':
      return yaml.load(data);
    default:
      return data;
  }
};
