import * as api from '../api/index.js';
import {
  FETCH_NYT_ARTICLES,
  LOADING_ARTICLES,
  SLOW_LOADING,
  NO_ARTICLES,
} from '../constants/actionTypes';

export const fetchArticles = (keyword) => async (dispatch) => {
  dispatch({ type: LOADING_ARTICLES });

  const loadingCountdown = setTimeout(
    () => dispatch({ type: SLOW_LOADING }),
    3000
  );

  try {
    const {
      data: [page1],
    } = await api.fetchArticles(keyword);

    clearTimeout(loadingCountdown);

    const dataCollection = [...page1.response.docs].filter(
      (doc) => doc.multimedia.length
    );

    if (!dataCollection.length) throw new Error(`no search results`);

    dispatch({ type: FETCH_NYT_ARTICLES, payload: dataCollection });
  } catch (error) {
    console.log(error.message);
    clearTimeout(loadingCountdown);
    dispatch({ type: NO_ARTICLES });
  }
};
