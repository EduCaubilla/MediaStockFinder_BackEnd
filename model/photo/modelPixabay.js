import {
    searchImages
} from "pixabay-api";
import dotenv from "dotenv";

dotenv.config();

const AUTH_PIXA_KEY = process.env.AUTH_PIXA_KEY;

const pixabay = (search) => {
    return searchImages(AUTH_PIXA_KEY, search, {
        per_page: 200,
        // category: "people",
        order: "latest"
    })
}



export default pixabay;