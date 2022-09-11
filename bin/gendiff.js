#!/usr/bin/env node
import { program } from 'commander';
import readFile from '../src/readFile.js';
import gendiff from '../src/index.js';


program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
    const difference = gendiff(readFile(filepath1), readFile(filepath2));
    console.log(difference);
  })
  .parse(process.argv);
