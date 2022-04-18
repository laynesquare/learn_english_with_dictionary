import * as api from '../api/index.js';

export const fetchDictionary = (keyword) => async (dispatch) => {
  try {
    const { data } = await api.fetchDictionary(keyword);

    const defNum = data[0].meanings.length;

    var defNumArr = [];

    const makeDefNumArr = () => {
      for (let i = 0; i < defNum; i++) {
        defNumArr = [...defNumArr, i];
      }
    };

    makeDefNumArr();

    dispatch({
      type: 'SEARCH',
      payload: [...data, defNum, { defNumArr: defNumArr }],
    });
  } catch (err) {
    console.log(err.message);
  }
};
