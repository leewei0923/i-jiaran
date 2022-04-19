import React from 'react';
import styles from './popular.module.less';

const list = [
  {
    id: '1',
    url: 'Apple',
    img: 'https://cdn.pixabay.com/photo/2021/11/05/01/30/snow-6769948_1280.jpg'
  },
  {
    id: '2',
    url: '',
    img: 'https://cdn.pixabay.com/photo/2021/01/23/13/01/hills-5942468_1280.jpg'
  },
  {
    id: '3',
    url: '',
    img: 'https://cdn.pixabay.com/photo/2022/04/14/14/33/sunset-7132574_1280.jpg'
  },
  {
    id: '4',
    url: '',
    img: 'https://cdn.pixabay.com/photo/2022/04/15/10/30/flower-7134089_1280.jpg'
  },
  {
    id: '5',
    url: '',
    img: 'https://cdn.pixabay.com/photo/2021/08/02/17/56/lighthouse-6517457_1280.jpg'
  }
];

export default function Popular() {
  return <div className={styles.container}>

  </div>;
}
