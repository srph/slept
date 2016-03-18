var fs = require('fs');

function read(file) {
  return fs.existsSync(file)
    ? JSON.parse(fs.readFileSync(file, 'utf-8'))
    : [];
}

module.exports = read;