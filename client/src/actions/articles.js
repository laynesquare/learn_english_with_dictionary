import * as api from '../api/index.js';
import {
  LOADING_ARTICLES,
  FETCH_NYT_ARTICLES,
  NO_ARTICLES,
} from '../constants/actionTypes';

export const fetchArticles = (keyword) => async (dispatch) => {
  dispatch({ type: LOADING_ARTICLES });

  try {
    const {
      data: [
        {
          response: { docs: docP1 },
        },
        {
          response: { docs: docP2 },
        },
      ],
    } = await api.fetchArticles(keyword);

    const docCollection = docP1.concat(docP2);

    console.log(docCollection);

    for (let i = 0; i < docCollection.length; i++) {
      if (!docCollection[i].multimedia.length) {
        docCollection.splice(i, 1);
        i--;
      }
    }

    console.log('still execute?');

    dispatch({ type: FETCH_NYT_ARTICLES, payload: docCollection });
  } catch (error) {
    console.log(error.message);
    dispatch({ type: NO_ARTICLES });
    console.log('still execute?', 'erro');
  }
};
