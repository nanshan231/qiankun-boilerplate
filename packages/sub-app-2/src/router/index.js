import { createBrowserRouter } from "react-router-dom";
import routes from "./routes";

const router = createBrowserRouter(routes, {
    basename: window.__POWERED_BY_QIANKUN__ ? '/sub-app-2' : '/'
});

export default router;