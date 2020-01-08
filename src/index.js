/*
 * @Author: your name
 * @Date: 2020-01-08 14:06:59
 * @LastEditTime : 2020-01-08 15:07:26
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \redux\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from './redux/store'
import { reducer } from './redux/reducer'


import { Provider } from './redux/react-redux'
ReactDOM.render(
    <Provider store = {createStore(reducer)} >
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
