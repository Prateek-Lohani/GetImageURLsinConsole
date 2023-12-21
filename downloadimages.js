//Fist we have to copy image HAR and make a variable har and assign it the copied values.


var har=/*images HAR*/
var imageUrls = [];
har.log.entries.forEach(function (entry) {
  if (entry.response.content.mimeType.indexOf("image/") !== 0) return;
  imageUrls.push(entry.request.url);
});
console.log(imageUrls.join('\n'));
