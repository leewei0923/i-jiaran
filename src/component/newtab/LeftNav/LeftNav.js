import React from 'react';
import Icon from '~/component/Icon.js';
import styles from './leftNav.module.less';

export default function LeftNav(props) {
  const { data } = props;
  const onDown = (info) => {
    console.log(info);
  };
  return (
    <div className={styles.container}>
      {(data || []).map((item) => (
        <div className={styles.leftNavBox} key={item.key + item.id} onClick={() => onDown(item)}>
          <span className={styles.icon}>{item.icon ? <Icon type={item.icon} /> : ''}</span>
          <p className={styles.btn}>{item.name}</p>
        </div>
      ))}
    </div>
  );
}
