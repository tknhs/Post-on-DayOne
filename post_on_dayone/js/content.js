document.onkeydown = function(e) {
  // Alt + d
  if (e.keyCode==68 && e.altKey) {
    // get selected strings
    var strings = getSelection().toString();
    if (strings !== '') {
      chrome.extension.sendMessage({ strings: strings }, function(response) {});
    }
  }
}

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  if (request.method == 'getSelection') {
    sendResponse({data: getSelection().toString()});
  } else {
    sendResponse({});
  }
});
