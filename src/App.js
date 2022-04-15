import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, message } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import classnames from 'classnames';
import styles from '~/styles/app.module.less';
import QuickLink from './component/newtab/QuickLink/QuickLink.js';
import LeftNav from './component/newtab/LeftNav/LeftNav.js';
import RightNav from './component/newtab/RightNav/RightNav.js';
import { changeLeftNavState, changeDefaultSearch } from './store/action.js';
import { leftlist, Rightlist } from './util/visData.js';
import Exhibition from './component/newtab/Exhibition/Exhibition.js';
import SearchList from './component/newtab/SearchList/SearchList.js';
// eslint-disable-next-line object-curly-newline
import { MenuIcon, SettingIcon, IndexIcon, CloseIcon } from './component/Icon.js';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchContent, setSearchContent] = useState('');
  const [navHiden, setNavHiden] = useState(true);

  const { defaultSearch, defaultSearchName } = useSelector((state) => state.defaultSearch);
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

  // 选择搜索引擎

  const onChangeSearch = (v, i) => {
    dispatch(changeDefaultSearch({ value: v, id: i }));
  };

  // 搜索
  const onGetText = (e) => {
    setSearchContent(e.target.value);
  };

  const onSearchContent = () => {
    if (searchContent.length === 0) {
      message.warn('请输入你要搜索的内容');
      return;
    }
    switch (defaultSearch) {
      case 'Sougou':
        window.location.assign(`https://www.sogou.com/web?ie=UTF-8&query=${searchContent}`);
        break;
      case 'Google':
        window.location.assign(`https://www.google.com/search?q=${searchContent}`);
        break;
      case 'Baidu':
        window.location.assign(`https://www.baidu.com/#ie=UTF-8&wd=${searchContent}`);
        break;
      case 'Bing':
        window.location.assign(`https://www.bing.com/search?q=${searchContent}&PC=U316&FORM=CHROMN`);
        break;
      default:
        break;
    }
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
        <Button icon={<MenuIcon style={{ fontSize: '32px' }} />} className={styles.more} onClick={() => onOpenNav()} />
        <Button icon={<SettingIcon style={{ fontSize: '32px' }} />} className={styles.setting} />
      </div>

      {/* 搜索框 */}

      <div className={styles.searchContainer}>
        <div className={styles.selectSearch}>
          <SearchList onChangeSearch={onChangeSearch} defaultSearchId={defaultSearch} />
        </div>
        <div className={styles.searchInner}>
          <input
            type="text"
            className={styles.searchBox}
            placeholder={`『${defaultSearchName}』搜你想要的内容....`}
            onChange={onGetText}
          />
          <Button className={styles.searchBtn} icon={<SearchOutlined />} onClick={() => onSearchContent()} />
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
                <IndexIcon />
              </span>
              <p>首页</p>
            </div>
            <LeftNav data={leftlist} />
          </div>

          {/* 右导航 */}
          <div className={styles.rightContainer}>
            <div className={styles.closeBtn} onClick={(e) => onCloseNav(e)}>
              <CloseIcon />
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
