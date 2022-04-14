import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import classnames from 'classnames';
import Icon from './component/Icon.js';
import styles from '~/styles/app.module.less';
import QuickLink from './component/newtab/QuickLink/QuickLink.js';
import LeftNav from './component/newtab/LeftNav/LeftNav.js';
import RightNav from './component/newtab/RightNav/RightNav.js';
import { changeLeftNavState } from './store/action.js';
import { leftlist, Rightlist } from './util/visData.js';
import Exhibition from './component/newtab/Exhibition/Exhibition.js';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [navHiden, setNavHiden] = useState(true);

  // 关闭导航栏
  const onCloseNav = () => {
    setNavHiden(true);
  };

  const onOpenNav = () => {
    setNavHiden(false);
  };

  //  首页按钮
  const onIndexBtn = () => {
    dispatch(changeLeftNavState('index'));
    navigate('/');
  };

  const popupPageMask = classnames({
    [styles.popupPageMask]: true,
    [styles.hiden]: navHiden
  });

  return (
    <div className={styles.container}>
      <div className={styles.mask}> </div>
      {/* 左右两个选项 */}
      <div className={styles.topOptions}>
        <Button icon={<Icon type="icon-menu--fill" />} className={styles.more} onClick={() => onOpenNav()} />
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

      {/* 弹出的导航栏 */}

      <div className={popupPageMask}>
        <div className={styles.popupPage}>
          {/* // 左导航 */}

          <div className={styles.leftContainer}>
            <div className={styles.leftNavIndex} onClick={() => onIndexBtn()}>
              <span className={styles.leftIndexIco}>
                <Icon type="icon-index" />
              </span>
              <p>首页</p>
            </div>
            <LeftNav data={leftlist} />
          </div>

          {/* 右导航 */}
          <div className={styles.rightContainer}>
            <div className={styles.closeBtn} onClick={(e) => onCloseNav(e)}>
              <Icon type="icon-guanbi" />
            </div>

            <Routes>
              <Route path="/" element={<Exhibition />} />
              <Route path="rightNav" element={<RightNav data={Rightlist} />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
