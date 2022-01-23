import ReactDOM from 'react-dom';
import React from 'react';
import './styles/default.scss';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import store from "./redux";
import { Provider } from 'react-redux';

const element = document.querySelector('#root');

ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
, element);