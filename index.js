import path from 'node:path';
import buildTree from './src/buildTree.js';
import formatDiff from './src/formatters/index.js';
import { getPathToFile, readFile, getData } from './src/readFile.js';

/**
 * @description Returns difference between two objects
 * @param {String} filename1 First file name
 * @param {Object} filename2 Second file name
 * @returns {String} Difference
 */
export default (filename1, filename2, format = 'stylish') => {
  const data = [filename1, filename2]
    .map((filename) => getPathToFile(filename.toString()))
    .map((filepath) => [readFile(filepath), path.extname(filepath)])
    .map(([content, extension]) => getData(content, extension));
  const difference = formatDiff(buildTree(...data), format);
  return difference;
};
