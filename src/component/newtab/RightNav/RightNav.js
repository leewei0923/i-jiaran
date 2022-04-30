import React, { useEffect, useState } from 'react';
import { Pagination } from 'antd';
import { useSelector } from 'react-redux';
import styles from './right.module.less';
import LinkCard from './LinkCard/LinkCard.js';
import { GenRightNavData } from '~/util/toRightData.js';

export default function RightNav(props) {
  const [paginationCount, setCount] = useState(1);
  const { data } = props;

  const onChange = (e) => {
    setCount(e);
  };

  const leftNavState = useSelector((state) => state.changeNavState.leftNavState); // 左侧导航栏的key值
  const rightPaginationNum = useSelector((state) => state.changePaginationNum.defaultNum); // 右侧控制页数，切换时候重置

  useEffect(() => {
    setCount(rightPaginationNum);
  }, [leftNavState]);

  // 对 index 进行跳转
  if (leftNavState === 'index') return;
  const lastRightData = GenRightNavData(data, leftNavState);

  return (
    <div className={styles.container}>
      {lastRightData.slice((paginationCount - 1) * 18, (paginationCount - 1) * 18 + 18).map((item) => (
        <LinkCard title={item.name} icon={item.icon} desc={item.name} key={item.key + item.id} url={item.url} />
      ))}
      <div className={styles.pagination}>
        <Pagination
          pageSize="18"
          total={lastRightData.length}
          current={paginationCount}
          showLessItems
          size="small"
          onChange={onChange}
        />
      </div>
    </div>
  );
}
