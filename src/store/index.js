import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import list from './reducers/list'

// this global states
const reducers = combineReducers({
  list,
})

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

export default store