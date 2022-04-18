import React from 'react';
import styles from './date.module.less';

export default function Date() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.day}>18</p>
        <div className={styles.date_Week}>
          <span className={styles.month}>4月</span>

          <p className={styles.year}>
            2022
            <span className={styles.week}>周一</span>
          </p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.text}>距离中秋节还有</div>

        <div className={styles.dateLine}>
          10
          <span>天</span>
        </div>
      </div>
    </div>
  );
}
