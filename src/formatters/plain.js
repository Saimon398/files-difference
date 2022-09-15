/**
 * @description Return value according to its type
 * @param {String | Number | Boolean | Object} value
 * @returns {String | Number | Boolean | Object}
 */
const getValue = (value) => {
  if (typeof value === 'object' && value !== null) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
};

/**
 * @description Return difference in plain format
 * @param {Object} difference
 * @param {String | Number | Boolean | Object} parent
 * @returns {String}
 */
const plain = (difference, parent) => difference
  .filter(({ type }) => type !== 'unchanged')
  .map((node) => {
    const {
      type, key, children, value, value1, value2,
    } = node;
    const prop = parent ? `${parent}.${key}` : `${key}`;
    switch (type) {
      case 'nested':
        return `${plain(children, prop)}`;
      case 'added':
        return `Property '${prop}' was added with value: ${getValue(value)}`;
      case 'deleted':
        return `Property '${prop}' was removed`;
      case 'changed':
        return `Property '${prop}' was updated. From ${getValue(value1)} to ${getValue(value2)}`;
      default:
        throw new Error('Such type is not supported');
    }
  }).join('\n');

export default plain;
