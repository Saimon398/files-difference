import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { readFileSync } from 'node:fs';
import { test, expect, describe } from '@jest/globals';
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
  { file1: 'file1.json', file2: 'file2.json', expected: 'json-dif.txt' },
  { file1: 'file1.yaml', file2: 'file2.yaml', expected: 'yaml-dif.txt' },
])('.add($file1, $file2)', ({ file1, file2, expected }) => {
  test('overall perfomance', () => {
    const received1 = JSON.parse(readFileSync(getFixturePath(file1), 'utf-8'));
    const received2 = JSON.parse(readFileSync(getFixturePath(file2), 'utf-8'));
    expect(gendiff(received1, received2))
      .toEqual(readFileSync(getFixturePath(expected)).toString());
  });
});
