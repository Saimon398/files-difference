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

### How To Use

Unitlity help can be displayed after entering the following command:

    gendiff -h

Yield the following help output

    Usage: gendiff [options] <filepath1> <filepath2>

    Compares two configuration files and shows a difference.

    Options:
    -V, --version  output the version number
    -f, --format <type>  output format (default: "stylish")
    -h, --help display help for command

### Games Description

There are a total of 5 games, each of which is named according to the command it is launched with. Every game has common logic: **player is asked three questions** with different content and **he needs to give correct answer to keep playing. If players cannot answer correctly, game is over**. Every question is about operations with numbers from 0 to 100.

    brain-even   		# guess if the displayed number is even

    brain-calc   		# give correct answer for math operation

    brain-gcd    		# find the greatest common divisor

    brain-prime  		# guess if the displayed number is prime

    brain-progression	# find missing number in progression

There are links to the asccinema records demonstrating different game processes below. You can see how to play these games and then try it by yourself.

| GAMES             | GAME PROCESS                                      |
| ----------------- | ------------------------------------------------- |
| brain-even        | https://asciinema.org/a/NRe64g7zPVHsuAaT9AQzbIW80 |
| brain-calc        | https://asciinema.org/a/hWIQ7SCi0MPf0HQ2VeWsyIOsb |
| brain-prime       | https://asciinema.org/a/NOQMmdmlBL1Y8RkX2G8nOca72 |
| brain-gcd         | https://asciinema.org/a/lm41mRlLjdzn9LlY76uinCUIb |
| brain-progression | https://asciinema.org/a/wWntl1Cdm0U8vlI7SfBwFRi9R |

ENJOY YOUR GAME :)
