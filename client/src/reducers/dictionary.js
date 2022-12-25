import {
  LOADING_DICTIONARY,
  FETCH_DICTIONARY,
  NO_DEFINITION,
} from '../constants/actionTypes';
import { NONE_DEF } from '../constants/dictionaryInitialState';

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
