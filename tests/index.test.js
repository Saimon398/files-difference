import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { test, expect, describe } from '@jest/globals';
import parse from '../src/parsers.js';
import { readFile } from '../src/readFile.js';
import formatDiff from '../src/formatters/index.js';
import buildTree from '../src/buildTree.js';

/**
 * @description Return URL path
 */
const __filename = fileURLToPath(import.meta.url);

/**
 * @description Return path to dir
 */
const __dirname = path.dirname(__filename);

/**
 * @description Return absolute path to test files
 * @param {String} filename Name of test file
 * @returns {String} Absolute path
 */
const getFixturePath = (filename) => path
  .join(__dirname, '..', '__fixtures__', filename);

describe.each([
  {
    file1: 'file1.json', file2: 'file2.json', stylish: 'stylish-dif.txt', plain: 'plain-dif.txt', json: 'json-dif.txt',
  },
  {
    file1: 'file1.yaml', file2: 'file2.yaml', stylish: 'stylish-dif.txt', plain: 'plain-dif.txt', json: 'json-dif.txt',
  },
])('.add($file1, $file2)', ({
  file1, file2, stylish, plain, json,
}) => {
  test('Stylish format', () => {
    const [received1, received2, expected] = [file1, file2, stylish]
      .map(getFixturePath)
      .map((filepath) => [readFile(filepath), path.extname(filepath)])
      .map(([content, extension]) => parse(content, extension));
    const difference = formatDiff(buildTree(received1, received2), 'stylish');
    expect(difference).toEqual(expected);
  });
  test('Plain format', () => {
    const [received1, received2, expected] = [file1, file2, plain]
      .map(getFixturePath)
      .map((filepath) => [readFile(filepath), path.extname(filepath)])
      .map(([content, extension]) => parse(content, extension));
    const difference = formatDiff(buildTree(received1, received2), 'plain');
    expect(difference).toEqual(expected.toString());
  });
  test('Json format', () => {
    const [received1, received2, expected] = [file1, file2, json]
      .map(getFixturePath)
      .map((filepath) => [readFile(filepath), path.extname(filepath)])
      .map(([content, extension]) => parse(content, extension));
    const difference = formatDiff(buildTree(received1, received2), 'json');
    expect(difference).toEqual(expected);
  });
});
