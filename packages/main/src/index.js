import React from 'react';
import ReactDOM from 'react-dom/client';
import { registerMicroApps, start } from 'qiankun';
import {
  RouterProvider,
} from "react-router-dom";
import router from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

registerMicroApps([
  {
    name: 'sub-app-1',
    entry: '//localhost:3001',
    container: '#container',
    activeRule: '/sub-app-1',
  },
  {
    name: 'sub-app-2',
    entry: '//localhost:3002',
    container: '#container',
    activeRule: '/sub-app-2',
  }
]);
// 启动 qiankun
start();
