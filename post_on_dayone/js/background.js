chrome.contextMenus.create({
  "title": chrome.i18n.getMessage("extTitle"),
  "type": "normal",
  "contexts": ["selection"],
  "onclick": function(info, tab) {
    var title = tab.title;
    var url = tab.url;
    var text = info.selectionText;

    var header = '## [' + title + '](' + url + ')\n';
    var body = '---\n\n' + text + '\n\n---\n';
    var footer = '![capture](http://capture.heartrails.com/300x200/cool?' + url + ')';

    var dayone = 'dayone://post?entry=' + encodeURIComponent(header + body + footer);
    chrome.tabs.create({url: dayone});
  }
});
