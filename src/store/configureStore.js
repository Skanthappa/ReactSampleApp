import {routerMiddleware} from 'react-router-redux';
import {createStore,compose,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import root from './rootReducer';

export default function configureStore(history){
    const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
    const enhancer = composeEnhancers(
        applyMiddleware(thunk, routerMiddleware(history))
    );
    const store=createStore(root,enhancer);
    return store;

}