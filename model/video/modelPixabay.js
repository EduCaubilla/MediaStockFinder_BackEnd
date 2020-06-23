import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const AUTH_PIXA_KEY = process.env.AUTH_PIXA_KEY;

const per_page = 20;

const pixabay = (search, page) => {

    return fetch(`https://pixabay.com/api/videos/?key=${AUTH_PIXA_KEY}&q=${search}&page=${page}&per_page=${per_page}`)
    // .then(res => res.json())
    // .then((json) => {
    //     console.log(json);
    //     res.json(json);
    // });
}

export default pixabay;