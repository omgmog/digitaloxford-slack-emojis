const fs = require('fs');
const readChunk = require('read-chunk');
const fileType = require('file-type');
const glob = require('glob');
const rext = require('replace-ext');

glob("emoji/*.*", {}, function (er, files) {

  files.forEach(function (file) {
  	let buffer = readChunk.sync(file, 0, 4100);
  	let ext = fileType(buffer).ext;
  	let newname = rext(file, `.${ext}`);

  	fs.rename(file, newname);

  	console.log(`${file} => ${newname}`);
  });
})