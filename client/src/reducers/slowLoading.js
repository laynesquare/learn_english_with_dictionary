import { SLOW_LOADING, SLOW_LOADING_END } from '../constants/actionTypes';

export const slowLoading = (state = false, action) => {
  switch (action.type) {
    case SLOW_LOADING:
      return true;
    case SLOW_LOADING_END:
      return false;
    default:
      return state;
  }
};
