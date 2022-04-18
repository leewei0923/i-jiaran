import React from 'react';
import styles from './welcome.module.less';

export default function Welcome() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2 className={styles.name}>你好 嘉然</h2>
        <p className={styles.motto}>今天又是满满元气的一天哦</p>
      </div>
      <div className={styles.right}>
        <div className={styles.img}></div>
      </div>
    </div>
  );
}
