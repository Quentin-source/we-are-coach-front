import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from './component/App';

import './index.css';
import 'semantic-ui-css/semantic.min.css';


// import reportWebVitals from './reportWebVitals';

const rootReactElement = (
    // <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    // </React.StrictMode>,
    // document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

const target = document.getElementById('root');

ReactDom.render(rootReactElement, target);

// reportWebVitals();
