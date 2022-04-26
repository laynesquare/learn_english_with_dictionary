import * as api from '../api/index.js';

export const fetchDictionary =
  (keyword, isMobile, handleDicModalOpen) => async (dispatch) => {
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

      if (isMobile) {
        handleDicModalOpen();
      }
    } catch (err) {
      dispatch({ type: 'CLEAR' });
      if (isMobile) {
        handleDicModalOpen();
      }
      console.log(err.message);
    }
  };
