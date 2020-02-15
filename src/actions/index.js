
// keys for actiontypes
export const ActionTypes = {
  SEARCH_CHANGED: 'SEARCH_CHANGED',
};

export function loadSearch(results) {
  return {
    type: ActionTypes.SEARCH_CHANGED,
    payload: results,
  };
}
