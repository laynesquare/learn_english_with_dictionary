import {
  FETCH_NYT_ARTICLES,
  LOADING_ARTICLES,
  NO_ARTICLES,
} from '../constants/actionTypes';

export const articles = (articles = [], action) => {
  switch (action.type) {
    case LOADING_ARTICLES:
      return LOADING_ARTICLES;
    case FETCH_NYT_ARTICLES:
      return action.payload;
    case NO_ARTICLES:
      return null;
    default:
      return articles;
  }
};
