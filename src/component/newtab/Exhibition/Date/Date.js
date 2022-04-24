import React, { useEffect, useState } from 'react';
import { HandleTime } from '~/util/HandleTime.js';
import { festivalDate } from '~/util/visData.js';
import styles from './date.module.less';

export default function Date() {
  const handleTime = new HandleTime();
  const [date, setDate] = useState('');

  // 处理节日
  const handleFestival = () => {
    const list = festivalDate.sort((a, b) => handleTime.getTime(a.date) - handleTime.getTime(b.date));
    for (let i = 0; i < list.length; i++) {
      if (handleTime.getTime(list[i].date) - window.Date.now() >= 0) {
        const countDown = ((handleTime.getTime(list[i].date) - window.Date.now()) / 86400000).toFixed();
        setDate({ count: countDown, name: list[i].name, id: list[i].id });
        return;
      }
    }
  };

  useEffect(() => {
    handleFestival();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.day}>{handleTime.today()}</p>
        <div className={styles.date_Week}>
          <span className={styles.month}>{`${handleTime.month()}月`}</span>

          <p className={styles.year}>
            {handleTime.year()}
            <span className={styles.week}>{handleTime.getCurrentDay(handleTime.day())}</span>
          </p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.text}>{`距离${date.name || ''}`}</div>

        <div className={styles.dateLine}>
          {date.count || ''}
          <span>天</span>
        </div>
      </div>
    </div>
  );
}
