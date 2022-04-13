import React from 'react';
import Icon from '~/component/Icon.js';
import styles from './linkCard.module.less';

export default function LinkCard() {
  // const { title, summary, img } = props;

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        {/* <img src="" alt="" /> */}
        <Icon type="icon-react" />
      </div>

      <div className={styles.desc}>
        <p className={styles.title}>React 官方文档</p>
        <p className={styles.summary}>前端比较著名的框架</p>
      </div>
    </div>
  );
}
