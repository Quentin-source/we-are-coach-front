import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './component/App/App';
// import reportWebVitals from './reportWebVitals';

const rootReactElement = (
  // <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </React.StrictMode>,
  // document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

const target = document.getElementById('root');

ReactDom.render(rootReactElement, target);

// reportWebVitals();
