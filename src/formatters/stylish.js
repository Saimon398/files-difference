/**
 * @description Return indent
 * @param {String} replacer
 * @param {Number} space
 * @param {Number} depth
 * @returns {String} Indent
 */
const indent = (depth, space = 4) => ' '.repeat(depth * space);

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
  const bracketIndent = indent(depth - 1);
  const lines = Object.entries(data)
    .map(([key, value]) => `${indent(depth)}${key}: ${stringify(value, depth + 1)}`);
  return ['{', ...lines, `${bracketIndent}}`].join('\n');
};

/**
 * @description Process data in 'tree-like' format
 * @param {Object []} difference Data difference
 * @param {Number} depth
 * @returns {String}
 */
const stylish = (difference, depth = 1) => {
  const bracketIndent = indent(depth - 1);
  const lines = difference
    .flatMap((node) => {
      const {
        type, key, children, value, value1, value2,
      } = node;
      switch (type) {
        case 'nested':
          return `${indent(depth - 0.5)}  ${key}: ${stylish(children, depth + 1)}`;
        case 'deleted':
          return `${indent(depth - 0.5)}- ${key}: ${stringify(value, depth + 1)}`;
        case 'added':
          return `${indent(depth - 0.5)}+ ${key}: ${stringify(value, depth + 1)}`;
        case 'unchanged':
          return `${indent(depth - 0.5)}  ${key}: ${stringify(value, depth + 1)}`;
        case 'changed':
          return [
            `${indent(depth - 0.5)}- ${key}: ${stringify(value1, depth + 1)}`,
            `${indent(depth - 0.5)}+ ${key}: ${stringify(value2, depth + 1)}`,
          ];
        default:
          throw new Error(`Unknown type: ${type}`);
      }
    });
  return [
    '{',
    ...lines,
    `${bracketIndent}}`,
  ].join('\n');
};

export default stylish;
