
import fetch from 'node-fetch';
import dotenv from "dotenv";

dotenv.config();

const AUTH_PIXA_KEY = process.env.AUTH_PIXA_KEY;

const pixabayFindOne = async (id) => {
  const response = await fetch(`https://pixabay.com/api/?key=${AUTH_PIXA_KEY}&id=${id}`);
  const data = await response.json();
  return data;
}

export default pixabayFindOne;