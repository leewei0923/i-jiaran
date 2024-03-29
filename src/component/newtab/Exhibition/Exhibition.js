import React from 'react';
import styles from './exhibition.module.less';
import Welcome from './Welcome/Welcome.js';
import Date from './Date/Date.js';
import DateChart from './Note/Note.js';
import RecentActivity from './RecentActivity/RecentActivity.js';

export default function Exhibition() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <Welcome />
        <h2 className={styles.hotTitle}>最近活动</h2>
        <RecentActivity />
      </div>

      <div className={styles.rightContainer}>
        <Date />

        <DateChart />
        <div className={styles.readmore}>
          <p>了解更多的信息</p>
          <p>请点击</p>

          <div className={styles.btn}>
            <a href="https://doc.icenew.top" className={styles.link}>
              Go
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
