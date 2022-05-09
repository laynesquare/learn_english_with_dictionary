import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config;

const urlNyt = {
  url1: `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=`,
  searchTerm: `election`,
  url2: `&api-key=`,
};

export const getPassages = async (req, res) => {
  const { keyword } = req.query;
  try {
    const { data } = await axios.get(
      `${urlNyt.url1}${keyword}${urlNyt.url2}${process.env.NYT_API_KEY}`
    );

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};
