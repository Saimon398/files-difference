import path from 'node:path';
import process from 'node:process';
import fs from 'fs';
import parse from './parsers.js';

/**
 * @description Return absolute path to file
 * @param {String} filename Name of file
 * @returns {String} Absolute path to file
 */
export const getPathToFile = (filename) => path
  .resolve(process.cwd(), '__fixtures__', filename);

/**
 * @description Return data of file
 * @param {String} filepath Path to file
 * @returns {any} Data
 */
export const readFile = (filepath) => fs.readFileSync(filepath);

/**
 * @description Return parsed data
 * @param {String} content File content
 * @returns {any} Parsed data
 */
export const getData = (content, extension) => parse(content, extension);
