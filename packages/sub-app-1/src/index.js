import './public-path';
import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  RouterProvider,
} from "react-router-dom";
import router from './router';

let root;
const rootId = 'sub-app1-root';

function render(props) {
  console.log('-----props-----', props)
  const { container } = props;
  root = createRoot(container ? container.querySelector(`#${rootId}`) : document.querySelector(`#${rootId}`));
  root.render(<RouterProvider router={router} />);
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}

export async function mount(props) {
  console.log('[react16] props from main framework', props);
  render(props);
}

export async function unmount(props) {
  const { container } = props;
  if (root) {
    root.unmount();
  }
}