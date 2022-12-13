import { when } from 'pattern-matching-js';

/**
 * @description Returns processed value according to its type
 * @param {String | Number | Boolean | Object} value
 * @returns {String | Number | Boolean | Object} processed value
 */
const changeTypeOfValue = (value) => {
  const processedValue = when(true)
    .case(typeof value === 'object' && value !== null, () => '[complex value]')
    .case(typeof value === 'string', () => `'${value}'`)
    .case(true, () => value)
    .end();
  return processedValue;
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
    const line = when(type)
      .case('nested', () => `${plain(children, prop)}`)
      .case('added', () => `Property '${prop}' was added with value: ${changeTypeOfValue(value)}`)
      .case('deleted', () => `Property '${prop}' was removed`)
      .case('changed', () => `Property '${prop}' was updated. From ${changeTypeOfValue(value1)} to ${changeTypeOfValue(value2)}`)
      .end();

    return line;
  }).join('\n');

export default plain;
