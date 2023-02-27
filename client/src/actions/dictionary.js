import * as api from '../api/index.js';
import {
  LOADING_DICTIONARY,
  FETCH_DICTIONARY,
  NO_DEFINITION,
} from '../constants/actionTypes.js';

export const fetchDictionary = (keyword) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_DICTIONARY });
    const {
      data: [{ word, phonetic, meanings: meaningsArr }],
    } = await api.fetchDictionary(keyword);

    dispatch({
      type: FETCH_DICTIONARY,
      payload: { word, phonetic, meanings: meaningsArr },
    });
  } catch (err) {
    dispatch({ type: NO_DEFINITION });
    console.log(err.message);
  }
};
