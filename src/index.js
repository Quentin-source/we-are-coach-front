import ReactDom from 'react-dom';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from './component/App';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import './styles/_reset.css'
import './index.scss';
import 'animate.css';

// import reportWebVitals from './reportWebVitals';

const mainThemeMUI = createTheme({
    palette: {
        primary: {
            main: '#df943e',
        },
        secondary: {
            main: '#ff9191',
        },
        mode: 'light',
    },
});

const rootReactElement = (
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider theme={mainThemeMUI}>
                    <App />
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    </StrictMode>
    // document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



const target = document.getElementById('root');

ReactDom.render(rootReactElement, target);

// reportWebVitals();
