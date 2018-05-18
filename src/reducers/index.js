import { combineReducers } from 'redux';
import countReducer from './countReducer';

const combinedReducer = combineReducers({
    count: countReducer,
});

export default combinedReducer;