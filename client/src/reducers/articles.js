export const articles = (articles = [], action) => {
  switch (action.type) {
    case 'FETCH':
      return action.payload;
    default:
      return articles;
  }
};
