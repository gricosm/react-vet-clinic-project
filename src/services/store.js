import { createStore } from 'redux';
import mainReducer from './redux/reducers/mainReducer';
import { devToolsEnhancer } from 'redux-devtools-extension';

export default createStore(mainReducer, {}, devToolsEnhancer({ trace: true}));