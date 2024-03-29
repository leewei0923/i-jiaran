import ChromeStorage from '~/util/ChromeStorage.js';

// 获取当前选项卡ID
// eslint-disable-next-line no-unused-vars
function getCurrentTabId(callback) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (callback) callback(tabs);
  });
}

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
  // m 后续更新0
  // chrome.contextMenus.create({
  //   id: 'share',
  //   title: '分享网页',
  //   type: 'normal',
  //   contexts: ['all']
  // });

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

  chrome.contextMenus.onClicked.addListener((info) => {
    if (info.menuItemId === 'shareText') {
      sendMessageToContentScript({ cmd: 'shareText', value: info.selectionText, url: info.pageUrl }, (res) => {
        console.log(`来自content的回复：${res}`);
      });
    } else if (info.menuItemId === 'captureVisible') {
      chrome.windows.getCurrent((win) => {
        // 抓取当前tab的内容
        chrome.tabs.captureVisibleTab(win.id, {}, (data) => {
          sendMessageToContentScript({ cmd: 'pic', value: data }, (res) => {
            console.log(`来自content的回复：${res}`);
          });
        });
      });
    }
  });
});

// 定时提醒
const chromeStorage = new ChromeStorage();

async function remind() {
  const current = Date.now();
  const data = await chromeStorage.getLocalItem({ remind: current, rest: 0 });
  const { remind: lastTime, rest } = data;

  if (rest === 0) return;
  if (!remind) {
    chromeStorage.setLocalItem('remind', current);
    return;
  }

  if (current - lastTime >= (rest - 0.1) * 3600000 && current - lastTime <= (rest + 0.1) * 3600000) {
    chrome.notifications.create(null, {
      type: 'basic',
      iconUrl: '../../images/logo.png',
      title: '嘉然让你休息一下',
      message: '已经上网超过1个小时了,休息一下吧'
    });
    chromeStorage.setLocalItem('remind', current);
  } else if (current - lastTime > (rest + 0.1) * 3600000) {
    chromeStorage.setLocalItem('remind', current);
  }
}

// 提醒喝水
async function toDrank() {
  const currentTime = Date.now();
  const data = await chromeStorage.getLocalItem({ dranking: '', drank: 0 });

  const { dranking, drank } = data;
  if (drank === 0) return; //  drank == 0 的处理
  if (dranking === '') {
    chromeStorage.setLocalItem('dranking', currentTime);
    return; // dranking 初始值 undefined 的处理
  }

  if (currentTime - dranking >= drank * 60 * 1000 && currentTime - dranking <= (drank + 5) * 60 * 1000) {
    chrome.notifications.create(null, {
      type: 'basic',
      iconUrl: '../../images/logo.png',
      title: '嘉然小提示 ',
      message: '多喝水，走动走动！'
    });
    chromeStorage.setLocalItem('dranking', currentTime);
  } else if (currentTime - dranking > ((drank || 45) + 5) * 60 * 1000) {
    chromeStorage.setLocalItem('dranking', currentTime);
  }
}

setInterval(() => {
  remind();
  toDrank();
}, 600000);
