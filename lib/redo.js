var write = require('./write');
var read = require('./read');

function redo() {
  var undo = read('sleptundolog');

  if ( !undo.length ) {
    console.log('error: no log to put back.');
    process.exit(1);
  }

  var last = undo.shift();
  write('sleptundolog', undo);
  var logs = read('sleptlog');
  logs.push(last);
  write('sleptlog', logs);
  console.log('redo: you put back the last removed log.');
}

module.exports = redo;