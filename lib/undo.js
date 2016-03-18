var read = require('./read');
var write = require('./write');

function undo() {
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
}

module.exports = undo;