export const keyword = (keyword = [], action) => {
  switch (action.type) {
    case 'SEARCH':
      return action.payload;
    default:
      return keyword;
  }
};
