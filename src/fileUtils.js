const fs = require('fs');

function makeFileBackup (path) {
  console.log(`Making backup of file ${path}...`);
  const timestamp = new Date().getTime();
  fs.createReadStream(path).pipe(fs.createWriteStream(`${path}.${timestamp}.backup`));
}

function replaceFile (path, newContent) {
  console.log(`Replacing file ${path} with new content...`);
  fs.writeFile(path, newContent, function (error) {
    if (error) {
      return console.log(error);
    }
  });
}

module.exports = {
  makeFileBackup,
  replaceFile
}