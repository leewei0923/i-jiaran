import React, { useState, useEffect } from 'react';
import HandleStorage from '~/util/localStorage.js';
import styles from './welcome.module.less';

export default function Welcome() {
  const handleStorage = new HandleStorage();
  const [initalData, setInitalData] = useState(null);

  useEffect(() => {
    const data = handleStorage.getItem('personInfo');
    setInitalData(data);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2 className={styles.name}>{`你好 ${initalData ? initalData.username : '嘉然'}`}</h2>
        <p className={styles.motto}>{initalData ? initalData.motto : '今天又是满满元气的一天哦!'}</p>
      </div>
      <div className={styles.right}>
        <div className={styles.img}></div>
      </div>
    </div>
  );
}
