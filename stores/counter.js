import { INCREMENT_COUNTER, DECRMENT_COUNTER } from '../constants/ActionTypes';


// can be improve with ImmutableJS
export default function counter(state = 0, action) {
  switch (action.type) {
  case INCREMENT_COUNTER:
    return state + 1;
  case DECRMENT_COUNTER:
    return state - 1;
  default:
    return state;
  }
}
