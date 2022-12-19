import { NONE_DEF } from '../constants/dictionaryInitialState';
import {
  NO_DEFINITION,
  FETCH_DICTIONARY,
  LOADING_DICTIONARY,
} from '../constants/actionTypes';

export const dictionary = (dictionary = NONE_DEF, action) => {
  switch (action.type) {
    case FETCH_DICTIONARY:
      return action.payload;
    case LOADING_DICTIONARY:
      return LOADING_DICTIONARY;
    case NO_DEFINITION:
      return NONE_DEF;
    default:
      return dictionary;
  }
};
