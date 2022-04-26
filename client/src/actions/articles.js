import * as api from '../api/index.js';

export const fetchArticles = (keyword) => async (dispatch) => {
  try {
    const { data } = await api.fetchArticles(keyword);

    const articlesId = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const newArticles = articlesId.filter((id) => {
      const integrity =
        typeof data.response == 'undefined' ||
        typeof data.response.docs[id] == 'undefined' ||
        typeof data.response.docs[id].multimedia == 'undefined' ||
        typeof data.response.docs[id].multimedia[0] == 'undefined' ||
        typeof data.response.docs[id].multimedia[0].url == 'undefined';
      if (!integrity === true) return Number.isFinite(id);
      return '';
    });

    const newData = { ...data, integrity: [...newArticles] };

    dispatch({
      type: 'FETCH',
      payload: newData,
    });
  } catch (error) {
    console.log(error.message);
  }
};
