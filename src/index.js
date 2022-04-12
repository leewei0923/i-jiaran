import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './styles/global.css';

function Home() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(<Home />);
