import React, { useEffect, useRef } from 'react';
import styles from './popular.module.less';

const list = [
  {
    id: '1',
    title: '热门',
    img: 'https://cdn.pixabay.com/photo/2021/11/05/01/30/snow-6769948_1280.jpg',
    key: '',
    exp: ''
  },
  {
    id: '2',
    title: '开发',
    img: 'https://cdn.pixabay.com/photo/2021/01/23/13/01/hills-5942468_1280.jpg',
    key: '',
    exp: ''
  },
  {
    id: '3',
    title: '办公',
    img: 'https://cdn.pixabay.com/photo/2022/04/14/14/33/sunset-7132574_1280.jpg',
    key: '',
    exp: ''
  },
  {
    id: '4',
    title: '购物',
    img: 'https://cdn.pixabay.com/photo/2022/04/15/10/30/flower-7134089_1280.jpg',
    key: '',
    exp: ''
  },
  {
    id: '5',
    title: '美化',
    img: 'https://cdn.pixabay.com/photo/2021/08/02/17/56/lighthouse-6517457_1280.jpg',
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
          <div className={styles.ilink} key={item.title + item.id} style={{ backgroundImage: `url(${item.img})` }}>
            <p className={styles.title}>{item.title}</p>
            <p className={styles.ads}>{item.exp}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
