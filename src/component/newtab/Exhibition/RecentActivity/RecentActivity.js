import React from 'react';
import { List, Typography } from 'antd';
import styles from './recentActivity.module.less';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.'
];
export default function RecentActivity() {
  return (
    <div className={styles.container}>
      <List
        dataSource={data}
        locale="目前还没有其他活动哦!"
        split="false"
        className={styles.list}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text mark>[移动设备]</Typography.Text>
            {item}
          </List.Item>
        )}
      />
    </div>
  );
}
