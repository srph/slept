#!/usr/bin/env node
var fs = require('fs');
var add = require('./add');
var undo = require('./undo');
var redo = require('./redo');
var pkg = require('../package');
var args = process.argv.slice(2);

switch(args[0]) {
  case 'add': add(args[1]); break;
  case 'undo': undo(); break;
  case 'redo': redo(); break;
  case '--version':
  case '-v':
    console.log('slept v%s', pkg.version);
    break;
    
  default: help();
}

function help() {
  console.log([
    'Usage:',
    '  slept [command]',
    '',
    'Options:',
    '  -h, --help     Display usage',
    '  -v, --version  Display version',
    '',
    'Example:',
    '  slept add 8',
    '  slept undo',
    '  slept redo',
  ].join('\n'));
}