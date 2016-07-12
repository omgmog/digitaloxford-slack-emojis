/*

Crappy devtools method for getting all of the custom emoji out of slack...

Will give you the following for each:

  { "url": "url to image", "filename": "filename.ext" },

*/


var emoji = document.querySelectorAll('.emoji_row .emoji-wrapper:first-child'); 
var out = [];

for (var i=0;i<emoji.length;i++) {
  var url = emoji[i].dataset.original;
  var ext = url.split('.').pop();
  var text = emoji[i].parentElement.nextSibling.nextSibling.innerText.replace(':','').replace(':','');

  out.push({ url: url, filename:text+'.'+ext});

};
// Gives us one big JSON object, rather than a load of pseudo-JSON objects
console.log(JSON.stringify(out));
