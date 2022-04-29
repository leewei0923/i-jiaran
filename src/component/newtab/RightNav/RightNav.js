import React from 'react';
import { Pagination } from 'antd';
import { useSelector } from 'react-redux';
import styles from './right.module.less';
import LinkCard from './LinkCard/LinkCard.js';
import { GenRightNavData } from '~/util/toRightData.js';

export default function RightNav(props) {
  const { data } = props;

  const leftNavState = useSelector((state) => state.changeNavState.leftNavState); // 左侧导航栏的key值
  // 对 index 进行跳转
  if (leftNavState === 'index') return;
  const lastRightData = GenRightNavData(data, leftNavState);

  return (
    <div className={styles.container}>
      {lastRightData.map((item) => (
        <LinkCard title={item.name} icon={item.icon} desc="优秀的js应用" key={item.key + item.id} />
      ))}
      <div className={styles.pagination}>
        <Pagination pageSize="18" total="36" showLessItems size="small" />
      </div>
    </div>
  );
}
