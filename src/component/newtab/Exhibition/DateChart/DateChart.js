import React, { useEffect, useState } from 'react';
import { Tooltip } from 'antd';
import styles from './dateChart.module.less';
import { HandleTime } from '~/util/HandleTime.js';

const time = [
  [1, 3],
  [2, 5],
  [3, 5],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 8]
];

export default function DateChart() {
  const handleTime = new HandleTime();
  const [weekList, setWeekList] = useState([]);

  const SortByWeek = () => {
    time.sort((a, b) => a[1] - b[1]);
    setWeekList([...time]);
  };

  const SortByDur = () => {
    time.sort((a, b) => b[2] - a[2]);
    setWeekList([...time]);
  };

  useEffect(() => {
    const list = new HandleTime(Date.now()).getWeekList();
    for (let i = 0; i < time.length; i++) {
      time[i].unshift(list[i]);
    }
    setWeekList(time);
    () => {
    };
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.select}>
        <p onClick={SortByWeek}>按星期</p>
        <p onClick={SortByDur}>按时长</p>
      </div>

      <div className={styles.weekList}>
        {weekList.map((item) => (
          <Tooltip title={`${item[0]}`} color="volcano" key={item[0]}>
            <div className={styles.weeks}>
              <div
                className={styles.progress}
                data-dur={item[2]}
                style={{ width: `${Math.floor((item[2] / 12) * 100)}%` }}
              ></div>
              <span className={styles.date}>{handleTime.getCurrentDay(item[1])}</span>
              {/* <span className={styles.week}>{handleTime.getCurrentDay(item[1])}</span> */}
              <span className={styles.duration} date-dur={item[2]}>{`${item[2]} h`}</span>
            </div>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}
