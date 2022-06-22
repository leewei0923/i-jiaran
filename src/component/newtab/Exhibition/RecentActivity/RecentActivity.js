import React from 'react';
import { List, Typography } from 'antd';
import styles from './recentActivity.module.less';

const data = [
  '完成掘金插件的开发工作'
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
