export class HandleTime {
  constructor(date) {
    this.date = date;
    this.weekList = [];
    this.dayList = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
    this.$date = new Date();
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

  today() {
    return this.$date.getDate();
  }

  year() {
    return this.$date.getFullYear();
  }

  month() {
    return this.$date.getMonth();
  }

  interval(ms, callback) {
    const start = document.timeline ? document.timeline.currentTime : performance.now();
    function timer1(time) {
      const gaps = time - start;
      const seconds = Math.round(gaps / ms);
      callback(seconds);
      // console.log(seconds);
      const targetNext = (seconds + 1) * ms + start; // 算出下次interval开始的时间
      const delay = document.timeline ? document.timeline.currentTime : performance.now(); // 取出更新完UI的时间
      setTimeout(
        () => {
          requestAnimationFrame(timer1); // requestAnimationFrame 执行回调函数的时刻 当作参数，传入到callback
        },
        targetNext - delay // 算出距离下次interval开始时间
      );
    }
    timer1(start);
  }
}
