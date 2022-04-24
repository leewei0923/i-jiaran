import { HandleTime } from '~/util/HandleTime.js';

const handleTime = new HandleTime();
const dateList = handleTime.getWeekList(); // 一个星期的日期集合
const currentDate = `${handleTime.year()}-${handleTime.month()}-${handleTime.today()}`; // 当前的日期

function calculateDuration() {
  const res = new Array(7).fill({});

  // 设置初始数据，
  let initalList = [];
  chrome.storage.local.get(['duration'], (item) => {
    initalList = item.duration || [];
  });

  let countNum = 0;
  for (let i = 0; i < initalList.length; i++) {
    if (initalList[i].date === currentDate) {
      countNum = initalList[i].count;
      break;
    }
  }
  countNum += 5; // 用计数的方式计时

  for (let i = 0; i < dateList.length; i++) {
    if (initalList[i] instanceof Object) {
      if (initalList[i] === currentDate) {
        res[i].id = i;
        res[i].date = dateList[i];
        res[i].day = i + 1;
        res[i].count = countNum;
      }
    } else {
      res.push({ id: i, date: dateList[i], day: i + 1, count: countNum });
    }
  }

  chrome.storage.local.set({ duration: res });
}

setInterval(() => {
  calculateDuration();
  chrome.storage.local.get(['duration'], (item) => {
    console.log(item);
  });
}, 5000);
