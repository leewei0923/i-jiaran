// 用于通信
function sendMessageToContentScript(message, callback) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, message, (response) => {
      if (callback) callback(response);
    });
  });
}

// 分享网页
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'share',
    title: '分享网页',
    type: 'normal',
    contexts: ['all']
  });

  chrome.contextMenus.create({
    id: 'shareText',
    title: '二维码分享,『 %s 』',
    type: 'normal',
    contexts: ['selection']
  });

  chrome.contextMenus.create({
    id: 'captureVisible',
    title: '网页长截图',
    type: 'normal',
    contexts: ['all']
  });

  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === 'share') {
      sendMessageToContentScript({ cmd: 'test', value: '你好，我是popup！' }, (response) => {
        console.log(`来自content的回复：${response}`);
      });

      chrome.notifications.create(null, {
        type: 'basic',
        iconUrl: '../../images/logo.png',
        title: '新消息提醒',
        message: tab.title
      });
    } else if (info.menuItemId === 'shareText') {
      sendMessageToContentScript({ cmd: 'shareText', value: info.selectionText, url: info.pageUrl }, (response) => {
        console.log(`来自content的回复：${response}`);
      });
    } else if (info.menuItemId === 'captureVisible') {
      chrome.windows.getCurrent((win) => {
        // 抓取当前tab的内容
        chrome.tabs.captureVisibleTab(win.id, {}, (data) => {
          sendMessageToContentScript({ cmd: 'pic', value: data }, (response) => {
            console.log(`来自content的回复：${response}`);
          });
        });
      });
    }
  });
});
