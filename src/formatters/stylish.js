import { when } from 'pattern-matching-js';
/**
 * @description Return indent
 * @param {String} replacer
 * @param {Number} space
 * @param {Number} depth
 * @returns {String} Indent
 */
const getIndent = (depth, space = 4) => ' '.repeat(depth * space);

/**
 * @description Stringify data
 * @param {Object} data
 * @param {Number} depth
 * @returns {String}
 */
const stringify = (data, depth = 1) => {
  if (typeof data !== 'object' || !data) {
    return `${data}`;
  }
  const bracketIndent = getIndent(depth - 1);
  const lines = Object.entries(data)
    .map(([key, value]) => `${getIndent(depth)}${key}: ${stringify(value, depth + 1)}`);
  return ['{', ...lines, `${bracketIndent}}`].join('\n');
};

/**
 * @description Process data in 'tree-like' format
 * @param {Object []} difference Data difference
 * @param {Number} depth
 * @returns {String}
 */
const stylish = (difference, depth = 1) => {
  const bracketsIndent = getIndent(depth - 1);
  const lines = difference
    .flatMap((node) => {
      const {
        type, key, children, value, value1, value2,
      } = node;
      const line = when(type)
        .case('nested', () => `${getIndent(depth - 0.5)}  ${key}: ${stylish(children, depth + 1)}`)
        .case('deleted', () => `${getIndent(depth - 0.5)}- ${key}: ${stringify(value, depth + 1)}`)
        .case('added', () => `${getIndent(depth - 0.5)}+ ${key}: ${stringify(value, depth + 1)}`)
        .case('unchanged', () => `${getIndent(depth - 0.5)}  ${key}: ${stringify(value, depth + 1)}`)
        .case('changed', () => [
          `${getIndent(depth - 0.5)}- ${key}: ${stringify(value1, depth + 1)}`,
          `${getIndent(depth - 0.5)}+ ${key}: ${stringify(value2, depth + 1)}`,
        ])
        .end();
      return line;
    });
  return [
    '{',
    ...lines,
    `${bracketsIndent}}`,
  ].join('\n');
};

export default stylish;
