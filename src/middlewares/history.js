import { routerMiddleware } from "react-router-redux";
import { createBrowserHistory } from "history";

const browserHistory = createBrowserHistory();
const historyMiddleware = routerMiddleware(browserHistory);
export default historyMiddleware;
