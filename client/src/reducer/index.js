import { createStore, combineReducers } from 'redux';

import login from './login/index';

const reducers = combineReducers({ login });
const store = createStore(reducers);

export default store;
