import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory();
const store = configureStore(history);


function render(Component) {
    ReactDOM.render(
        <React.Fragment>
        <Provider store={store} >
                <Component />
        </Provider>
        </React.Fragment>
        ,
        document.getElementById('root')
    )
}


render(App);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
