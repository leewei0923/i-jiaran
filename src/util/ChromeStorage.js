export default class ChromeStorage {
  setLocalItem(key, value) {
    chrome.storage.local.set({ [key]: value }, () => '保存成功');
  }

  setSyncItem(key, value) {
    chrome.storage.sync.set({ [key]: value }, () => '保存成功');
  }

  async getLocalItem(key) {
    return await chrome.storage.local.get(key);
  }

  async getSyncItem(key) {
    return await chrome.storage.sync.get(key);
  }
}
