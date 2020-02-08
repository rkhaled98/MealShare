
// keys for actiontypes
export const ActionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  SEARCH_CHANGED: 'SEARCH_CHANGED',
};


export function increment() {
  return {
    type: ActionTypes.INCREMENT,
    payload: null,
  };
}

export function decrement() {
  return {
    type: ActionTypes.DECREMENT,
    payload: null,
  };
}

export function loadSearch(results) {
  return {
    type: ActionTypes.SEARCH_CHANGED,
    payload: results,
  };
  // return (dispatch) => {
  //   return dispatch({
  //     type: ActionTypes.SEARCH_CHANGED,
  //     payload: results,
  //   });
  // };
}
