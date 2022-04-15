import React from 'react';
import styles from './linkCard.module.less';

export default function LinkCard(props) {
  const { title, desc, icon } = props;

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        {/* <img src="" alt="" /> */}
        {icon}
      </div>

      <div className={styles.desc}>
        <p className={styles.title}>{title}</p>
        <p className={styles.summary}>{desc}</p>
      </div>
    </div>
  );
}
