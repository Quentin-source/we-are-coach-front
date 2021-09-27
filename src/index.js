import ReactDom from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from './component/App';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import './styles/_reset.css'
import './index.scss';

// import reportWebVitals from './reportWebVitals';

const mainThemeMUI = createTheme({
    palette: {
        primary: {
            main: '#ffb74d',
        },
        secondary: {
            main: '#ffab91',
        },
        maeva:{
            main: '#ffffff',
        },
        mode: 'light',
    },
});

const rootReactElement = (
    // <React.StrictMode>
    
    <Provider store={store}>
        <BrowserRouter>
            <ThemeProvider theme={mainThemeMUI}>
                <App />
            </ThemeProvider>
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
