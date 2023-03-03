import App from "../App";
import PageOne from "../pages/page1";
import PageTwo from "../pages/page2";

const routes = [{
  path: "/",
  element: <App />,
  children: [{
    path: "page-1",
    element: <PageOne />
  }, {
    path: "page-2",
    element: <PageTwo />
  }]
}];

export default routes;