import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App.js';
import { useStore } from '~/store/store.js';
import './styles/global.css';

function Home() {
  const store = useStore();
  return (
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(<Home />);
