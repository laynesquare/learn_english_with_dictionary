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

    if (!page1.response.docs.length) {
      throw new Error('Cannot find any passages');
    }

    res.status(200).send([page1]);
  } catch (error) {
    console.error(error);
    res.status(404).json({ msg: error.message });
  }
};
