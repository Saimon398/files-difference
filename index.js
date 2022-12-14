import path from 'node:path';
import buildTree from './src/buildTree.js';
import formatDiff from './src/formatters/index.js';
import parse from './src/parsers.js';
import { getPathToFile, readFile } from './src/readFile.js';

/**
 * @description Returns difference between two objects
 * @param {String} filename1 First filename
 * @param {Object} filename2 Second filename
 * @returns {String} Difference between two files
 */
export default (filename1, filename2, format = 'stylish') => {
  const data = [filename1, filename2]
    .map((filename) => getPathToFile(filename.toString()))
    .map((filepath) => [readFile(filepath), path.extname(filepath)])
    .map(([content, extension]) => parse(content, extension));
  const difference = formatDiff(buildTree(...data), format);
  return difference;
};
