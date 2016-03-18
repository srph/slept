var fs = require('fs');

function write(file, logs) {
  fs.writeFileSync(file, JSON.stringify(logs));
}

module.exports = write;