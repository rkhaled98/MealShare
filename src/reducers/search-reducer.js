import { ActionTypes } from '../actions';

const CountReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.SEARCH_CHANGED:
      return action.payload;
    default:
      return state;
  }
};

export default CountReducer;
