import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { test, expect, describe } from '@jest/globals';
import { readFile, getData } from '../src/readFile.js';
import gendiff from '../src/index.js';

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
  { file1: 'file1.json', file2: 'file2.json', result: 'json-dif.txt' },
  { file1: 'file1.yaml', file2: 'file2.yaml', result: 'yaml-dif.txt' },
])('.add($file1, $file2)', ({ file1, file2, result }) => {
  test('overall perfomance', () => {
    const [received1, received2, expected] = [file1, file2, result]
      .map(getFixturePath)
      .map((filepath) => [readFile(filepath), path.extname(filepath)])
      .map(([content, extension]) => getData(content, extension));

    expect(gendiff(received1, received2)).toEqual(expected.toString());
  });
});
