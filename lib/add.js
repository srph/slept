var moment = require('moment');
var read = require('./read');
var write = require('./write');

function add(duration) {
  var logs = read('sleptlog');
  var start = fmt(moment().subtract(duration, 'hours'));
  var end = fmt(moment());
  logs.push({ start: start, end: end });
  write('sleptlog', logs);
  write('sleptundolog', []);
  console.log('log: you slept for %d hours (from %s to %s)', duration, start, end);
}

function fmt(m) {
  return m.format('YYYY-MM-DD hh:mm:ss');
}

module.exports = add;