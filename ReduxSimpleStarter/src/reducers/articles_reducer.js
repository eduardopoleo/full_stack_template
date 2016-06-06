import actions from '../constants';

const INITIAL_STATE = {
  all: []
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
  case actions.FETCHED_ARTICLES:
    return { ...state, all: action.payload }
    break;
  default:
    return state;
  }
}
