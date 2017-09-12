const fs = require('fs');
const glob = require('glob');
const rext = require('replace-ext');
const yaml = require('write-yaml');

glob("emoji/*.*", {}, function (er, files) {
  let obj = {
    "title": "digital-oxford",
    "emojis": []
  };
  files.forEach(function (file) {
    let name = rext(file, '').replace('emoji\\', '');

    obj.emojis.push({
      "name": name,
      "src": "https://raw.githubusercontent.com/omgmog/digitaloxford-slack-emojis/master/" + file
    });
  });
  yaml('emojipack.yml', obj, function(err) {
    if (err) console.log('failed to write yaml');
  });

})