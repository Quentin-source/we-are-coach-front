import ReactDom from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from './component/App';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import './index.css';

// import reportWebVitals from './reportWebVitals';

const mainThemeMUI = createTheme({
    palette: {
        primary: {
            main: '#ffb74d',
            dark: '#b28035',
            light: '#ffc570',
        },
        secondary: {
            main: '#ffab91',
            light: '#ffbba7',
            dark: '#b27765',
        },
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
