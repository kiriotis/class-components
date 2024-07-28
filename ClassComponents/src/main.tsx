import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { store } from './store/Store';
import { Theme } from './thems/ThemeProvaider';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <Theme>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Theme>
        </Provider>
    </React.StrictMode>
);
