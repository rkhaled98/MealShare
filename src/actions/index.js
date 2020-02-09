
// keys for actiontypes
export const ActionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  SEARCH_CHANGED: 'SEARCH_CHANGED',
  SEARCH_TERM: 'SEARCH_TERM',
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
}

export function loadSearchTerm(term) {
  return {
    type: ActionTypes.SEARCH_CHANGED,
    payload: term,
  };
}
