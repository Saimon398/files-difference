import path from 'node:path';
import process from 'node:process';
import { readFileSync } from 'node:fs';

/**
 * @description Return file name without extension
 * @param {String} filename Name of file with extension
 * @returns {String} 
 */
 const getFilename= (filepath) => {
  const [name] = filepath.split('.');
  return name;
};

/**
 * @description Get absolute path to file
 * @param {String} filepath Relative path to file
 * @returns {String} Absolute path to file
 */
const getAbsolutePath = (filepath) => path
  .resolve(process.cwd(),'__fixtures__', filepath);

/**
 * @description Get content of file in JSON format
 * @param {String} filepath Absolute path to file
 * @returns {any} Content in file with given filepath
 */
export default (filepath) => {
  const pathToFile = getAbsolutePath(filepath);
  return JSON.parse(readFileSync(pathToFile));
};

