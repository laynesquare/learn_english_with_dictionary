import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config;

const urlNyt = {
  base: `https://api.nytimes.com/svc/search/v2/articlesearch.json?sort=newest&q=`,
  page: `&page=`,
  key: `&api-key=`,
};

export const getPassages = async (req, res) => {
  const { keyword } = req.query;
  const { base, key, page } = urlNyt;

  try {
    const { data: page1 } = await axios.get(
      `${base}${keyword}${page}1${key}${process.env.NYT_API_KEY}`
    );

    const { data: page2 } = await axios.get(
      `${base}${keyword}${page}2${key}${process.env.NYT_API_KEY}`
    );

    res.status(200).json([page1, page2]);
  } catch (error) {
    console.log(error);
  }
};
