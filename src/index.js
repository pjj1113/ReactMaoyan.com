import React from 'react';
import ReactDOM from 'react-dom';
import './app.css'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'
import './utils/rem'
import { BrowserRouter as Router } from 'react-router-dom'
ReactDOM.render(
    <Provider store = { store }>
        <Router>
            <App />
        </Router>
    </Provider>,
document.getElementById('root'));
