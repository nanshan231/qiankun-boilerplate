import App from "../App";

const menuRoutes = ['/', '/sub-app-1', '/sub-app-2'].map(path => ({
  path,
  element: <App />
}))

const routes = [
  ...menuRoutes
];

export default routes;