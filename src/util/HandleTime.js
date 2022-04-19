export class HandleTime {
  constructor(date) {
    this.date = date;
    this.weekList = [];
    this.dayList = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
  }

  before() {
    const curWeek = new Date().getDay();
    const nowTime = Date.now(this.date);
    for (let i = curWeek - 1; i >= 0; i--) {
      const year = new Date(nowTime - i * 86400000).getFullYear();
      const month = new Date(nowTime - i * 86400000).getMonth();
      const day = new Date(nowTime - i * 86400000).getDate();
      this.weekList.push(`${year}-${month}-${day}`);
    }
  }

  after() {
    const curWeek = 7 - new Date().getDay();
    const nowTime = Date.now(this.date);
    for (let i = 1; i <= curWeek; i++) {
      const year = new Date(nowTime + i * 86400000).getFullYear();
      const month = new Date(nowTime + i * 86400000).getMonth();
      const day = new Date(nowTime + i * 86400000).getDate();
      this.weekList.push(`${year}-${month}-${day}`);
    }
  }

  getWeekList() {
    this.before();
    this.after();
    return this.weekList;
  }

  getCurrentDay(e) {
    if (e < 0 || e > 7) {
      return '';
    }

    return this.dayList[e - 1];
  }
}
