export const keyword = (keyword = [], action) => {
  switch (action.type) {
    case 'SEARCH':
      return action.payload;
    case 'CLEAR':
      return [];
    default:
      return keyword;
  }
};
