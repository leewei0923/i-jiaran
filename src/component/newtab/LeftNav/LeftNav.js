import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';
import Icon from '~/component/Icon.js';
import styles from './leftNav.module.less';
import { changeLeftNavState } from '~/store/action.js';

export default function LeftNav(props) {
  const { data } = props;
  const dispatch = useDispatch();

  const onDown = (info) => {
    dispatch(changeLeftNavState(info.key));
  };

  const leftState = useSelector((state) => state.changeNavState.leftNavState);
  const leftNavBox = ({ key }) =>
    classnames({
      [styles.leftNavBox]: true,
      [styles.active]: leftState === key
    });

  return (
    <div className={styles.container}>
      {(data || []).map((item) => (
        <div className={leftNavBox(item)} key={item.key + item.id} onClick={() => onDown(item)}>
          <span className={styles.icon}>{item.icon ? <Icon type={item.icon} /> : ''}</span>
          <p className={styles.btn}>{item.name}</p>
        </div>
      ))}
    </div>
  );
}
