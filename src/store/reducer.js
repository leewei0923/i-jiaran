import { combineReducers } from 'redux';
import * as types from './type.js';

const initLeftNavState = {
  leftNavState: 'index'
};

const initDefaultSearch = {
  defaultSearch: 'Sougou',
  defaultSearchName: '搜狗'
};

const initBackgroundImg = {
  defaultBackImg: ''
};

const initPageMode = {
  defaultModeState: true
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

// eslint-disable-next-line default-param-last
const switchBackImgReducer = (state = initBackgroundImg, { type, content }) => {
  switch (type) {
    case types.DEFAULTBACKIMG:
      return { defaultBackImg: content };
    default:
      return state;
  }
};

// 主页面模式状态
// eslint-disable-next-line default-param-last
const switchPageModeReducer = (state = initPageMode, { type, content }) => {
  switch (type) {
    case types.DEFAULTMODESTATE:
      return { defaultModeState: content };
    default:
      return state;
  }
};

const reducers = {
  changeNavState: leftNavStateReducer,
  defaultSearch: defaultSearchReducer,
  switchBackImg: switchBackImgReducer,
  switchPageMode: switchPageModeReducer
};

export default combineReducers(reducers);
