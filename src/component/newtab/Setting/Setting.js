import React, { useEffect, useRef, useState } from 'react';
import { Button, message, Switch, Tooltip, Radio } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import ChromeStorage from '~/util/ChromeStorage.js';
import HandleStorage from '~/util/localStorage.js';
import { chanegSimpleColor, changeAnimationState, changePageMode } from '~/store/action.js';
import styles from './setting.module.less';

export default function Setting(props) {
  const { callback } = props;
  const handleStorage = new HandleStorage();
  const chromeStorage = new ChromeStorage();
  const dispatch = useDispatch();

  const userName = useRef(null);
  const motto = useRef(null);
  const [initalData, setInitalData] = useState(handleStorage.getItem('personInfo'));
  const pageModestate = useSelector((s) => s.switchPageMode.defaultModeState); // 首页模式 true 简洁 false 复杂
  // const animationSate = useSelector((s) => s.animationState.defaultState); // 是否开启动画 默认是true 关闭动画

  // 点击保存文件
  const onSave = () => {
    const userNameValue = userName.current.value;
    const mottoValue = motto.current.value;
    if (!userNameValue || !mottoValue) {
      message.error('需要都输入内容哦');
    } else {
      if (mottoValue.length > 20) {
        message.warn('个性签名,需要精简一下');
        return;
      }
      handleStorage.setItem('personInfo', { username: userNameValue, motto: mottoValue });
      message.success('保存成功');
    }
  };

  const onSwitchBackground = () => {
    const imgList = [
      'https://cdn.pixabay.com/photo/2022/02/23/11/57/flowers-7030589_1280.jpg',
      'https://cdn.pixabay.com/photo/2022/04/12/18/00/europe-7128531_1280.jpg',
      'https://cdn.pixabay.com/photo/2022/04/17/17/54/mountains-7138605_1280.jpg',
      'https://cdn.pixabay.com/photo/2021/08/30/21/29/port-6587129_1280.jpg',
      'https://cdn.pixabay.com/photo/2022/01/18/16/49/town-6947538_1280.jpg',
      'https://cdn.pixabay.com/photo/2022/01/31/15/18/coffee-6984075_1280.jpg'
    ];
    const rand = Math.floor(Math.random() * 4);
    handleStorage.setItem('backImg', imgList[rand]);
  };

  // 页面模式切换
  const onSwitchMode = () => {
    dispatch(changePageMode(!pageModestate));
    handleStorage.setItem('pageMode', pageModestate);
    callback();
  };

  // 健康提醒
  const changeRemindNum = (e) => {
    if (e) {
      chromeStorage.setLocalItem('rest', 1);
      handleStorage.setItem('rest', true);
    } else {
      chromeStorage.setLocalItem('rest', 0);
      handleStorage.setItem('rest', false);
    }
  };

  // 喝水提醒
  const onDranking = (e) => {
    if (e) {
      chromeStorage.setLocalItem('drank', 45);
      handleStorage.setItem('drank', true);
    } else {
      chromeStorage.setLocalItem('drank', 0);
      handleStorage.setItem('drank', false);
    }
  };

  const [radioSwitch, setRadioSwitch] = useState(handleStorage.getItem('animation') ?? true);
  // 简洁模式下动画开启和关闭
  const onChangeAnimation = (e) => {
    handleStorage.setItem('animation', e);
    setRadioSwitch(e);
    dispatch(changeAnimationState(e));
  };

  // 改变简洁模式下字体颜色
  const [simpleColor, setSimpleColor] = useState(handleStorage.getItem('simpleColor') ?? '#0d0d0d');
  const onSimpleColorChange = (e) => {
    handleStorage.setItem('simpleColor', e.target.value);
    dispatch(chanegSimpleColor(e.target.value));
    setSimpleColor(e.target.value);
  };

  useEffect(() => {
    const data = handleStorage.getItem('personInfo');
    if (typeof handleStorage.getItem('pageMode') === 'boolean') {
      dispatch(changePageMode(!handleStorage.getItem('pageMode')));
    }
    setInitalData(data);
  }, []);

  return (
    <div className={styles.container}>
      <h3>设置</h3>
      <section className={styles.options}>
        {/* 模式切换 */}
        <div className={styles.option}>
          <span className={styles.optionName}>简洁模式</span>
          <Switch onChange={onSwitchMode} defaultChecked={handleStorage.getItem('pageMode')} />
        </div>

        {/* 名称选择 */}
        <div className={styles.option}>
          <input
            type="text"
            placeholder="你的昵称"
            className={styles.input}
            ref={userName}
            defaultValue={initalData ? initalData.username : '嘉然'}
          />
        </div>

        {/* 鼓励词语选择 */}
        <div className={styles.option}>
          <input
            type="text"
            placeholder="个性签名"
            className={styles.input}
            defaultValue={initalData ? initalData.motto : '今天又是满满元气的一天'}
            ref={motto}
          />
        </div>

        <div className={styles.option}>
          <Tooltip title="默认开启,间隔2个小时提醒">
            <span className={styles.optionName}>健康提醒</span>
          </Tooltip>

          <Switch onChange={changeRemindNum} defaultChecked={handleStorage.getItem('rest')} />
        </div>

        <div className={styles.option}>
          <Tooltip title="喝水提醒，间隔45分钟">
            <span className={styles.optionName}>喝水提醒</span>
          </Tooltip>

          <Switch onChange={onDranking} defaultChecked={handleStorage.getItem('drank')} />
        </div>

        <div className={styles.option}>
          <span className={styles.optionName}>关闭简洁模式动画</span>
          <Switch onChange={(e) => onChangeAnimation(e)} defaultChecked={handleStorage.getItem('animation') ?? true} />
        </div>

        <div className={styles.option}>
          <Radio.Group onChange={onSimpleColorChange} value={simpleColor} size disabled={!(radioSwitch ?? false)}>
            <Radio value="#0d0d0d">
              <span style={{ color: 'white' }}>黑</span>
            </Radio>
            <Radio value="#FFFFFF">
              <span style={{ color: 'white' }}>白</span>
            </Radio>
            <Radio value="#008DFF">
              <span style={{ color: 'white' }}>蓝</span>
            </Radio>
          </Radio.Group>
        </div>

        <div className={styles.switchBackground} onClick={onSwitchBackground}>
          点击 切换背景图
        </div>
      </section>

      <div className={styles.btnContainer}>
        <Button type="primary" size="small" ghost onClick={() => onSave()} style={{ color: 'white' }}>
          保存
        </Button>
      </div>
    </div>
  );
}
