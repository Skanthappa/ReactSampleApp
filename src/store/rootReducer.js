import {combineReducers} from 'redux';
import newsReducer from './news/reducer'

const root = combineReducers({
    news:newsReducer,
})

export default root;