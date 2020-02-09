// the starting point for your redux store
// this defines what your store state will look like
import { combineReducers } from 'redux';

import CountReducer from './count-reducer';
import ResultReducer from './search-reducer';
import SearchReducer from './search-result';

const rootReducer = combineReducers({
  count: CountReducer,
  results: ResultReducer,
  searchTerm: SearchReducer,
});

export default rootReducer;
