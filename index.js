#!/usr/bin/env node
var fs = require('fs');
var moment = require('moment');
var pkg = require('./package');
var args = process.argv.slice(2);

switch(args[0]) {
  case 'add':
    var logs = read('sleptlog');
    var start = fmt(moment().subtract(args[1], 'hours'));
    var end = fmt(moment());
    logs.push({ start: start, end: end });
    write('sleptlog', logs);
    write('sleptundolog', []);
    console.log('log: you slept for %d hours (from %s to %s)', args[1], start, end);
    break;
  case 'undo': 
    var logs = read('sleptlog');

    if ( !logs.length ) {
      console.log('error: no log to remove.');
      process.exit(1);
    }

    var popped = logs.pop();
    write('sleptlog', logs);
    var stack = read('sleptundolog');
    stack.splice(0, 0, popped)
    write('sleptundolog', stack);
    console.log('undo: you removed the recent log.');
    break;
  case '--version':
  case '-v':
    console.log('slept v%s', pkg.version);
    break;
  default: help();
}

function read(file) {
  return fs.existsSync(file)
    ? JSON.parse(fs.readFileSync(file, 'utf-8'))
    : [];
}

function write(file, logs) {
  fs.writeFileSync(file, JSON.stringify(logs));
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
  ].join('\n'));
}

function fmt(m) {
  return m.format('YYYY-MM-DD hh:mm:ss');
}