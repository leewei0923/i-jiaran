import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import HandleStorage from '~/util/localStorage.js';

import styles from './title.module.less';

export default function Title() {
  const handleStorage = new HandleStorage();
  const [closeAnimat, setCloseAnimat] = useState(handleStorage.getItem('animation') ?? true);

  const animationState = useSelector((state) => state.animationState.defaultState);

  const [simpleColorContent, setSimpleColor] = useState(handleStorage.getItem('simpleColor') ?? 'black');
  const simpleColor = useSelector((state) => state.simpleColor.defaultColor);

  useEffect(() => {
    setCloseAnimat(handleStorage.getItem('animation') ?? true);
    setSimpleColor(handleStorage.getItem('simpleColor') ?? 'black');
  }, [animationState, simpleColor]);
  return (
    <div className={styles.container}>
      <h1
        className={closeAnimat ? styles.titleLight : styles.title}
        style={{ color: animationState ? simpleColorContent : undefined }}
      >
        Hi 嘉然!
      </h1>
      <section className={styles.motto}>
        <div className={styles.slognBox}>
          <span className={styles.bar}></span>
          <p className={styles.desc}>
            {handleStorage.getItem('personInfo') ? handleStorage.getItem('personInfo').motto : '今天又是满满元气的一天'}
          </p>
        </div>
        <p className={styles.author}>
          Design And Development By
          <span style={{ fontWeight: '800', margin: '0 8px', fontSize: '20px' }}>Leewei</span>
        </p>
      </section>
    </div>
  );
}
