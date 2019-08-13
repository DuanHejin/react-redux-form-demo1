import {createStore} from 'redux';
import RootReducer from './reducer';

const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(RootReducer)
export default store;