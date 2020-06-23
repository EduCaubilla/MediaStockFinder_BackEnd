import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const AUTH_PIXA_KEY = process.env.AUTH_PIXA_KEY;

// const per_page = 80;

const pixabayOne = (id) => {

    return fetch(`https://pixabay.com/api/videos/?key=${AUTH_PIXA_KEY}&id=${id}`)
    // .then(res => res.json())
    // .then((json) => {
    //     console.log(json);
    //     res.json(json);
    // });
}

export default pixabayOne;