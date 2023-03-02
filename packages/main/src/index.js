import React from 'react';
import ReactDOM from 'react-dom/client';
import { registerMicroApps, start } from 'qiankun';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

registerMicroApps([
  {
    name: 'sub-app-1',
    entry: '//localhost:3000',
    container: '#container',
    activeRule: '/sub-app-1',
  },
  {
    name: 'sub-app-2',
    entry: '//localhost:3001',
    container: '#container',
    activeRule: '/sub-app-2',
  }
]);
// 启动 qiankun
start();
