import axios from 'axios';

const urlDictionary = `https://api.dictionaryapi.dev/api/v2/entries/en/`;
const urlArticles = process.env.REACT_APP_LEARN_ENGLISH_API;

export const fetchArticles = (keyword) => {
  return axios.get(`${urlArticles}?keyword=${keyword}`);
};

export const fetchDictionary = (keyword) => {
  return axios.get(`${urlDictionary}${keyword}`);
};
