import { useMemo } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ThunkMiddleware from 'redux-thunk';
import reducer from './reducer.js';

let store;

function initStore(initState) {
  return createStore(reducer, initState, composeWithDevTools(applyMiddleware(ThunkMiddleware)));
}

export const initializeStore = (preloadedStore) => {
  let myStore = store ?? initStore(preloadedStore);

  if (preloadedStore && store) {
    myStore = initStore({
      ...store.getState(),
      ...preloadedStore
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = myStore;

  return myStore;
};

export function useStore(initialState) {
  const reStore = useMemo(() => initializeStore(initialState), [initialState]);
  return reStore;
}
