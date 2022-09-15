# files-difference

## Irreplaceable cli-tool for comparing files

[![Test Coverage](https://api.codeclimate.com/v1/badges/d14b1ec2c594b72e8471/test_coverage)](https://codeclimate.com/github/Saimon398/frontend-project-lvl2/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/d14b1ec2c594b72e8471/maintainability)](https://codeclimate.com/github/Saimon398/frontend-project-lvl2/maintainability)
[![Actions Status](https://github.com/Saimon398/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/Saimon398/frontend-project-lvl2/actions)
[![Node CI](https://github.com/Saimon398/frontend-project-lvl2/workflows/NodeCI/badge.svg)](https://github.com/Saimon398/frontend-project-lvl2/actions)

This tool helps you **compare two files** in json and yaml (yml) formats now matter how complex the structure is and **return difference** .

### Requirements

- Mac / Linux

### Installation

    npm install files-difference

### Run Tests

    make test

### Lint

    make lint

### Quick Start

Unitlity help can be displayed after entering the following command:

    gendiff -h

Yield the following help output

    Usage: gendiff [options] <filepath1> <filepath2>

    Compares two configuration files and shows a difference.

    Options:
    -V, --version  output the version number
    -f, --format <type>  output format (default: "stylish")
    -h, --help display help for command

### File Comparison

File **comparison** might be realised between two files, that can have whether **json** or **yaml** formats. Start comparing can be launched by following command:

    gendiff <filepath1> <filepath2>

Result of comparison can be returned in three different formats: stylish (default format), plain and json. To display result in specific format, special option is used. Default format is stylish.

    gendiff --format <format> <filepath1> <filepath2>

At the following links result of comparison in different formats can be seen:
|FORMAT|COMPARISON PROCESS|
|------------|---------|
|stylish|https://asciinema.org/a/0z1nfWjTPUNlW0LX6MB5fEs5u|
|plain|https://asciinema.org/a/RqaQDbp5VXyMMMbA2f1UPw9rV|
|json|https://asciinema.org/a/CmFKDAMmPyeLZcYMZ6TPzhH1a |
