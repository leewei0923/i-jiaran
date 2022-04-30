import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, message } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import classnames from 'classnames';
import QuickLink from './component/newtab/QuickLink/QuickLink.js';
import LeftNav from './component/newtab/LeftNav/LeftNav.js';
import RightNav from './component/newtab/RightNav/RightNav.js';
import { changeLeftNavState, changeDefaultSearch } from './store/action.js';
import { leftlist } from './util/visData.js';
import { TabsDataList } from './util/tab.js';
import Exhibition from './component/newtab/Exhibition/Exhibition.js';
import SearchList from './component/newtab/SearchList/SearchList.js';
// eslint-disable-next-line object-curly-newline
import { MenuIcon, SettingIcon, IndexIcon, CloseIcon } from './component/Icon.js';
import { HandleTab } from '~/util/handleTabs.js';
import Setting from './component/newtab/Setting/Setting.js';
import HandleStorage from './util/localStorage.js';
import styles from '~/styles/app.module.less';

function App() {
  const handleTab = new HandleTab();
  const handleStorage = new HandleStorage();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchContent, setSearchContent] = useState('');
  const [navHiden, setNavHiden] = useState(true);
  const [tabInfo, setTabInfo] = useState([]);
  const [closeSet, setCloseSet] = useState(true);
  const [pageModeState, setPageModeState] = useState(
    typeof handleStorage.getItem('pageMode') === 'boolean' ? handleStorage.getItem('pageMode') : false
  );

  const { defaultSearch, defaultSearchName } = useSelector((state) => state.defaultSearch);
  const pageModestate = useSelector((s) => s.switchPageMode.defaultModeState);

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

  const onSettingClose = () => {
    setCloseSet(!closeSet);
  };

  // 选择模式
  const onPageMode = () => {
    setPageModeState(pageModestate);
  };

  // 获取历史记录生成tab
  const genTabList = () => {
    const query = {
      text: '',
      startTime: Date.now() - 86400000,
      endTime: Date.now()
    };

    chrome.history.search(query, (e) => {
      const tabList = handleTab.getList(e);
      setTabInfo(tabList.slice(0, 11));
    });
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

  const settingPopup = classnames({
    [styles.settingPopup]: true,
    [styles.close]: closeSet
  });

  useEffect(() => {
    // m
    genTabList;
  }, []);
  return (
    <div className={styles.container} style={{ background: `url(${handleStorage.getItem('backImg') || ''})` }}>
      <div className={styles.mask}> </div>
      {/* 左右两个选项 */}
      <div className={styles.topOptions}>
        <Button icon={<MenuIcon style={{ fontSize: '32px' }} />} className={styles.more} onClick={() => onOpenNav()} />
        <Button
          icon={<SettingIcon style={{ fontSize: '32px' }} />}
          className={styles.setting}
          onClick={() => onSettingClose()}
        />
      </div>

      {/* 搜索框 */}
      <div className={styles.searchContainer} style={{ display: pageModeState ? 'none' : '' }}>
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

      <div className={styles.recentUrl} style={{ display: pageModeState ? 'none' : '' }}>
        {tabInfo.map((item) => (
          <QuickLink
            key={item.key}
            linkName={item.title}
            title={item.title}
            turl={item.url}
            callback={genTabList}
            ico={item.hostDomain}
          />
        ))}
        {/* <QuickLink key="1" linkName="1" title="1" turl="1" /> */}
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
              <Route path="rightNav" element={<RightNav data={TabsDataList} />} />
            </Routes>
          </div>
        </div>
      </div>

      <div className={settingPopup}>
        <Setting callback={onPageMode} />
      </div>

      <div className={styles.live2d}></div>
    </div>
  );
}

export default App;
