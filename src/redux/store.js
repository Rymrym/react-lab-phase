import {createStore, combineReducers} from 'redux';
import {reducerOrders, reducerProduct} from './reducer';

export let store = createStore(combineReducers({reducerOrders, reducerProduct}))