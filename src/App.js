import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Icon from './component/Icon';
import styles from '~/styles/app.module.less';
import QuickLink from './component/newtab/QuickLink/QuickLink';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.mask}> </div>
      {/* 左右两个选项 */}
      <div className={styles.topOptions}>
        <Button icon={<Icon type="icon-menu--fill" />} className={styles.more} />
        <Button icon={<Icon type="icon-setting" />} className={styles.setting} />
      </div>

      {/* 搜索框 */}

      <div className={styles.searchContainer}>
        <div className={styles.searchInner}>
          <input type="text" className={styles.searchBox} placeholder="搜你想要的内容...." />
          <Button className={styles.searchBtn} icon={<SearchOutlined />} />
        </div>
      </div>

      {/* 下方最近访问的网站 */}

      <div className={styles.recentUrl}>
        <QuickLink
          ico="https://static.leetcode-cn.com/cn-mono-assets/production/assets/logo-dark-cn.c42314a8.svg"
          url="https://www.7miaoyu.com"
          linkName="七秒鱼"
        />
        <QuickLink
          ico="https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png"
          url="https://www.7miaoyu.com"
          linkName="七秒鱼"
        />
        <QuickLink url="https://www.7miaoyu.com" linkName="七秒鱼" />
        <QuickLink url="https://www.7miaoyu.com" linkName="七秒鱼鱼鱼鱼鱼hdsaifsfhus" />
        <QuickLink url="https://www.7miaoyu.com" linkName="七秒鱼" />
        <QuickLink url="https://www.7miaoyu.com" linkName="七秒鱼" />
        <QuickLink url="https://www.7miaoyu.com" linkName="七秒鱼" />
        <QuickLink url="https://www.7miaoyu.com" linkName="七秒鱼" />
        <QuickLink url="https://www.7miaoyu.com" linkName="七秒鱼" />
        <QuickLink url="https://www.7miaoyu.com" linkName="七秒鱼" />
        <QuickLink url="https://www.7miaoyu.com" linkName="七秒鱼" />
        <QuickLink url="https://www.7miaoyu.com" linkName="七秒鱼" />
        <QuickLink url="https://www.7miaoyu.com" linkName="七秒鱼" />
        <QuickLink url="https://www.7miaoyu.com" linkName="七秒鱼" />
        <QuickLink url="https://www.7miaoyu.com" linkName="七秒鱼" />
      </div>
    </div>
  );
}

export default App;
