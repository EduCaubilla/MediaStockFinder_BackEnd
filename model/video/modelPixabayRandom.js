import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const AUTH_PIXA_KEY = process.env.AUTH_PIXA_KEY;

const per_page = 20;

const pixabayRandom = async (page) => {

  const response = await fetch(`https://pixabay.com/api/videos/?key=${AUTH_PIXA_KEY}&video_type=film&order=popular&page=${page}&per_page=${per_page}`);

  const data = await response.json();

  return data;

}

export default pixabayRandom;