import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './GlobalStyles';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import Theme from './ThemeStyled';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Theme>
                <GlobalStyles/>
                <App/>
            </Theme>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
