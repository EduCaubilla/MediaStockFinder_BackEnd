// import {
//     searchImages
// } from "pixabay-api";
import fetch from 'node-fetch';
import dotenv from "dotenv";

dotenv.config();

const AUTH_PIXA_KEY = process.env.AUTH_PIXA_KEY;

const pixabayFindOne = (id) => {
    return fetch(`https://pixabay.com/api/?key=${AUTH_PIXA_KEY}&id=${id}`)
}



export default pixabayFindOne;