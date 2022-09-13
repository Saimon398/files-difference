#!/usr/bin/env node
import { program } from 'commander';
import path from 'node:path';
import { getPathToFile, readFile, getData } from '../src/readFile.js';
import gendiff from '../src/index.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format')
  .action((filename1, filename2) => {
    const data = [filename1, filename2]
      .map((filename) => getPathToFile(filename.toString()))
      .map((filepath) => [readFile(filepath), path.extname(filepath)])
      .map(([content, extension]) => getData(content, extension));

    const difference = gendiff(...data);

    console.log(difference);
  });

program.parse(process.argv);
