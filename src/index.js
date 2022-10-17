import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import App from './App';
import './index.css';
import { GoToTop } from './store';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <DndProvider backend={HTML5Backend}>
    <RecoilRoot>
      <BrowserRouter>
        <GoToTop />
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </DndProvider>
);
