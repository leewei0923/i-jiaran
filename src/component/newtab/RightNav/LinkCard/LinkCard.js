import React from 'react';
import { Tooltip, message } from 'antd';
import styles from './linkCard.module.less';

export default function LinkCard(props) {
  const { title, desc, url } = props;

  const goWebsit = () => {
    if (!window.navigator.onLine) {
      message.error('网络没有连接');
    } else {
      window.location.assign(url);
    }
  };

  return (
    <div className={styles.container} onClick={goWebsit}>
      <div className={styles.desc}>
        <p className={styles.title}>{title}</p>
        <Tooltip title={url}>
          <p className={styles.summary}>{desc}</p>
        </Tooltip>
      </div>
    </div>
  );
}
