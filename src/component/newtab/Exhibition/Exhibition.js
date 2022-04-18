import React from 'react';
import styles from './exhibition.module.less';
import Welcome from './Welcome/Welcome.js';
import Date from './Date/Date.js';

export default function Exhibition() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <Welcome />
      </div>

      <div className={styles.rightContainer}>
        <Date />
      </div>
    </div>
  );
}
