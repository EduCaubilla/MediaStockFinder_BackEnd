import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const AUTH_PIXA_KEY = process.env.AUTH_PIXA_KEY;

const per_page = 15;

const pixabayRandom = (page) => {

    // return fetch(`https://pixabay.com/api/videos/?key=${AUTH_PIXA_KEY}&page=${page}&per_page=${per_page}`)
    return fetch(`https://pixabay.com/api/videos/?key=${AUTH_PIXA_KEY}&page=${page}&per_page=${per_page}`)



    // https: pixabay.com/api/videos/?key=17031486-5324a5d5400de3f3de9d0f6b4&page=1&per_page=5
}

export default pixabayRandom;