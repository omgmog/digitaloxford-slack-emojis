/*

Crappy node.js way of downloading all of the emoji

This assumes you've got a json file called emoji.json

*/

var fs = require('fs');
var request = require('request');

var download = function (url, filename, callback) {
  request.head(url, function (error, response, body) {
    request(url).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

var files = require('./emoji.json');

for (var i=0;i<files.length;i++) {
  var url = files[i].url;
  var file = 'emoji/'+files[i].filename;
  download(url, file, function () {
    console.log('Downloaded', file);
  });
};
