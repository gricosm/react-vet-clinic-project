import { combineReducers } from 'redux';
import loginReducer from './loginReducer';

const mainReducer = combineReducers ({
    token: loginReducer
})

export default mainReducer;