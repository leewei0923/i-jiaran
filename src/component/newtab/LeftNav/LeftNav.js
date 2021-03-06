import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';
import styles from './leftNav.module.less';
import { changeLeftNavState, changePaginationNum } from '~/store/action.js';

export default function LeftNav(props) {
  const { data } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onDown = (info) => {
    dispatch(changeLeftNavState(info.key));
    dispatch(changePaginationNum(1));
    navigate('rightNav');
  };

  //  左边导航栏的状态(key)
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
          <span className={styles.icon}>{item.icon ? item.icon : ''}</span>
          <p className={styles.btn}>{item.name}</p>
        </div>
      ))}
    </div>
  );
}
