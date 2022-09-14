#!/usr/bin/env node
import { program } from 'commander';
import gendiff from '../src/index.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format', 'stylish')
  .action((filename1, filename2) => {
    const difference = gendiff(filename1, filename2, program.opts().format);
    console.log(difference);
  });

program.parse(process.argv);
