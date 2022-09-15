import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { test, expect, describe } from '@jest/globals';
import { readFile, getData } from '../src/readFile.js';
import gendiff from '../src/index.js';
import stylish from '../src/formatters/stylish.js';

const __filename = fileURLToPath(import.meta.url);
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
    file1: 'file1.json', file2: 'file2.json', stylish: 'stylish-dif.txt', plain: 'plain-dif.txt',
  },
  {
    file1: 'file1.yaml', file2: 'file2.yaml', stylish: 'stylish-dif.txt', plain: 'plain-dif.txt',
  },
])('.add($file1, $file2)', ({
  file1, file2, stylish, plain,
}) => {
  test('stylish format', () => {
    const [received1, received2, expected] = [file1, file2, stylish]
      .map(getFixturePath)
      .map((filepath) => [readFile(filepath), path.extname(filepath)])
      .map(([content, extension]) => getData(content, extension));
    expect(gendiff(received1, received2, 'stylish')).toEqual(expected.toString());
  });
  test('plain format', () => {
    const [received1, received2, expected] = [file1, file2, plain]
      .map(getFixturePath)
      .map((filepath) => [readFile(filepath), path.extname(filepath)])
      .map(([content, extension]) => getData(content, extension));

    expect(gendiff(received1, received2, 'plain')).toEqual(expected.toString());
  });
});

// Нужно поменять структуру, так как gendiff работает с одним путем до данных...
