import { combineReducers } from 'redux';
import * as types from './type.js';

const initLeftNavState = {
  leftNavState: 'index'
};

// eslint-disable-next-line default-param-last
const leftNavStateReducer = (state = initLeftNavState, { type, changeState }) => {
  switch (type) {
    case types.LEFTNAVSTATE:
      return { leftNavState: changeState };
    default:
      return state;
  }
};

const reducers = {
  changeNavState: leftNavStateReducer
};

export default combineReducers(reducers);
