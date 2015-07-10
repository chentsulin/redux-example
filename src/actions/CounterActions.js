import { INCREMENT_COUNTER, DECRMENT_COUNTER } from '../constants/ActionTypes';


export function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}


export function decrement() {
  return {
    type: DECRMENT_COUNTER
  };
}


export function incrementAsync() {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  };
}


export function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}
