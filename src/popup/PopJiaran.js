import QRCode from 'qrcode.react';
import { useEffect, useState } from 'react';
import styles from './popJiaran.module.less';

function PopJiaran() {
  const [tabsInfo, setTabsInfo] = useState();

  // function getTab(e) {
  //   console.log(e);
  // }
  // bg.getCurrentTabId(getTab);
  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      setTabsInfo(tabs[0]);
    });
  }, []);

  return (
    <div className={styles.container}>
      <p>{`分享 《${tabsInfo ? tabsInfo.title : ''}》`}</p>
      <p>⬇该网址的二维码</p>
      <QRCode
        value={tabsInfo ? tabsInfo.url : ''} // value参数为生成二维码的链接
        size={200} // 二维码的宽高尺寸
        fgColor="#000000" // 二维码的颜色
      />
    </div>
  );
}

export default PopJiaran;
