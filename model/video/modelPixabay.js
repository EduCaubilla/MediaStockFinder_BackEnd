import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const AUTH_PIXA_KEY = process.env.AUTH_PIXA_KEY;

const per_page = 20;

const pixabay = async (search, page) => {

  let query = encodeURIComponent(search);

  const response = await fetch(`https://pixabay.com/api/videos/?key=${AUTH_PIXA_KEY}&q=${query}&page=${page}&per_page=${per_page}`);

  const data = await response.json();

  return data;
}

export default pixabay;