import * as types from './type.js';

export const changeLeftNavState = (state) => (dispatch) =>
  dispatch({
    type: types.LEFTNAVSTATE,
    changeState: state
  });

export const changeDefaultSearch = (state) => (dispatch) =>
  dispatch({
    type: types.DEFAULTSEARCH,
    content: state
  });

export const changeBackImg = (state) => (dispatch) =>
  dispatch({
    type: types.DEFAULTBACKIMG,
    content: state
  });

// 改变主页面模式状态

export const changePageMode = (state) => (dispatch) =>
  dispatch({
    type: types.DEFAULTMODESTATE,
    content: state
  });

// 改变右页面导航页数
export const changePaginationNum = (state) => (dispatch) =>
  dispatch({
    type: types.DEFAULTPAGINATIONNUM,
    content: state
  });
