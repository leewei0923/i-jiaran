import { combineReducers } from 'redux';
import * as types from './type.js';

const initLeftNavState = {
  leftNavState: 'index'
};

const initDefaultSearch = {
  defaultSearch: 'Sougou',
  defaultSearchName: '搜狗'
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

// eslint-disable-next-line default-param-last
const defaultSearchReducer = (state = initDefaultSearch, { type, content }) => {
  switch (type) {
    case types.DEFAULTSEARCH:
      return { defaultSearch: content.id, defaultSearchName: content.value };
    default:
      return state;
  }
};

const reducers = {
  changeNavState: leftNavStateReducer,
  defaultSearch: defaultSearchReducer
};

export default combineReducers(reducers);
