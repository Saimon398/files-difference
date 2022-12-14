import path from 'node:path';
import process from 'node:process';
import fs from 'fs';

/**
 * @description Returns absolute path to file
 * @param {String} filename Name of file
 * @returns {String} Absolute path to file
 */
const getPathToFile = (filename) => path
  .resolve(process.cwd(), 'fixtures', filename);

/**
 * @description Returns data of file
 * @param {String} filepath Path to file
 * @returns {any} Data
 */
const readFile = (filepath) => fs.readFileSync(filepath);

export {
  getPathToFile,
  readFile,
};
