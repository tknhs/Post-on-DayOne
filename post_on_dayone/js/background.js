/**
 *  shortcut keydown event
 **/
chrome.extension.onMessage.addListener(function(request, sender, sendResponse){
  if (sender.tab) {
    var title = sender.tab.title;
    var url = sender.tab.url;
    var text = request.strings;
    dayone(title, url, text);
  }
});

/**
 *  browser_action click event
 **/
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.sendRequest(tab.id, {method: 'getSelection'}, function(response){
    var title = tab.title;
    var url = tab.url;
    var text = response.data;
    dayone(title, url, text);
  });
});

function dayone(title, url, text) {
  var header = '## [' + title + '](' + url + ')\n';
  var body = '---\n\n' + text + '\n\n---\n';
  var footer = '![capture](http://capture.heartrails.com/300x200/cool?' + url + ')';
  var dayone = 'dayone://post?entry=' + encodeURIComponent(header + body + footer);
  chrome.tabs.create({url: dayone});
}
