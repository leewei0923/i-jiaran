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
