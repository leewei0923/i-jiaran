import React, { useState } from 'react';
import { Button, message, Popconfirm } from 'antd';
import { MoreIcon } from '../../Icon.js';
import styles from './quickLink.module.less';
import { genFirstWord } from '~/util/genFirstWord.js';

export default function QuickLink(props) {
  /**
   * img icoLink 图片链接
   * linkName 链接名称
   * url 网址
   */
  const { ico, linkName, turl, callback } = props;

  const [imgState, setImgState] = useState(false);

  //  操作按钮
  // 确定
  const onDelete = () => {
    chrome.history.deleteUrl({ url: turl }, () => {
      message.success('删除成功');
      // -
      callback();
    });
  };

  //  删除
  const onCancle = () => {
    message.warn('已取消');
  };

  const onImgError = () => {
    setImgState(false);
  };

  // 跳转页面

  const goto = () => {
    if (!window.navigator.onLine) {
      message.error('网络没有连接');
    } else {
      window.location.assign(turl);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.inneContainer} onClick={() => goto()}>
        <div className={styles.icoBox}>
          <div className={styles.icon}>
            {imgState ? (
              <img src={`${ico}/favicon.ico`} alt="" className={styles.ico} onError={onImgError} />
            ) : (
              <p className={styles.imgFont}>{genFirstWord(linkName)}</p>
            )}
          </div>
        </div>
        <p className={styles.linkName} title={linkName}>
          {linkName}
        </p>
      </div>
      <div className={styles.options}>
        <Popconfirm
          title="确定要删除当前的"
          onConfirm={() => onDelete()}
          onCancel={() => onCancle()}
          okText="删除"
          cancelText="取消"
        >
          <Button icon={<MoreIcon />} className={styles.more} />
        </Popconfirm>
      </div>
    </div>
  );
}
