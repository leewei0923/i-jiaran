import React from 'react';
import { Button, Popconfirm } from 'antd';
import Icon from '../../Icon';
import styles from './quickLink.module.less';
import { genFirstWord } from '~/util/genFirstWord';

export default function QuickLink(props) {
  /**
   * img icoLink 图片链接
   * linkName 链接名称
   * url 网址
   */
  const { ico, linkName } = props;

  //  操作按钮
  // 确定
  const onDelete = () => {
    console.log('删除');
  };

  //  删除
  const onCancle = () => {
    console.log('取消');
  };

  return (
    <div className={styles.container}>
      <div className={styles.inneContainer}>
        <div className={styles.icoBox}>
          <div className={styles.icon}>
            {ico ? (
              <img src={ico} alt="" className={styles.ico} />
            ) : (
              <p className={styles.imgFont}>{genFirstWord(linkName)}</p>
            )}
          </div>
          <div className={styles.options}>
            <Popconfirm
              title="确定要删除当前的"
              onConfirm={() => onDelete()}
              onCancel={() => onCancle()}
              okText="删除"
              cancelText="取消"
            >
              <Button icon={<Icon type="icon-more" />} className={styles.more} />
            </Popconfirm>
          </div>
        </div>

        <p className={styles.linkName} title={linkName}>
          {linkName}
        </p>
      </div>
    </div>
  );
}
