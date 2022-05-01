import React, { useEffect, useRef } from 'react';
import { Image } from 'antd';
import styles from './popular.module.less';

const list = [
  {
    id: '1',
    title: '热门',
    img: 'https://qi.7miaoyu.com/jiaran%2Fjiaran05.jpg',
    key: '',
    exp: ''
  },
  {
    id: '2',
    title: '开发',
    img: 'https://qi.7miaoyu.com/jiaran%2Fjiaran04.jpg',
    key: '',
    exp: ''
  },
  {
    id: '3',
    title: '办公',
    img: 'https://qi.7miaoyu.com/jiaran%2Fjiaran03.jpg',
    key: '',
    exp: ''
  },
  {
    id: '4',
    title: '购物',
    img: 'https://qi.7miaoyu.com/jiaran%2Fjiaran02.jpg',
    key: '',
    exp: ''
  },
  {
    id: '5',
    title: '美化',
    img: 'https://qi.7miaoyu.com/jiaran%2Fjiaran01.jpg',
    key: '',
    exp: ''
  }
];

export default function Popular() {
  const containerSheave = useRef(null);

  useEffect(() => {
    containerSheave.current.addEventListener('wheel', (e) => {
      e.preventDefault();
      containerSheave.current.scrollLeft += e.deltaY;
    });
  }, []);

  return (
    <div className={styles.container} ref={containerSheave}>
      <div className={styles.inner}>
        {list.map((item) => (
          <Image
            src={item.img}
            key={item.title + item.id}
            className={styles.ilink}
          >
            {/* <div className={styles.ilink} style={{ backgroundImage: `url(${item.img})` }}> */}
            <p className={styles.title}>{item.title}</p>
            <p className={styles.ads}>{item.exp}</p>
            {/* </div> */}
          </Image>
        ))}
      </div>
    </div>
  );
}
