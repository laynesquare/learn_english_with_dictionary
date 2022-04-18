import express from 'express';
import mongoose from 'mongoose';
import NytApi from '../models/getApi.js';
import axios from 'axios';

const urlNyt = {
  url1: `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=`,
  searchTerm: `election`,
  url2: `&api-key=`,
};

export const getPassages = async (req, res) => {
  const { keyword } = req.query;
  try {
    const { key } = await NytApi.findById('625c1971965596fb2e3faa4d');
    const { data } = await axios.get(
      `${urlNyt.url1}${keyword}${urlNyt.url2}${key}`
    );

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};
