export default class HandleStorage {
  // 获取存入的数据
  getItem(key) {
    const value = window.localStorage.getItem(key);
    return JSON.parse(value);
  }

  // 将数据存入localStorage
  setItem(key, value) {
    const strValue = JSON.stringify(value);
    window.localStorage.setItem(key, strValue);
  }

  // 移除key中id相等的值
  removeItem(key, id) {
    const value = this.getItem(key);
    try {
      for (let i = 0; i < value.length; i++) {
        if (value[i].id === id) {
          value.splice(i, 1);
        }
      }
    } catch (err) {
      return err;
    }
  }

  // 移除key值
  removeKeyItem(key) {
    window.localStorage.removeItem(key);
  }

  // 单key中增删改查
  addItem(key, value) {
    const hValue = this.getItem(key);
    hValue.push(value);
    this.setItem(key, hValue);
  }
}
