import {
    searchImages
} from "pixabay-api";
import dotenv from "dotenv";

dotenv.config();

const AUTH_PIXA_KEY = process.env.AUTH_PIXA_KEY;

const pixabay = (search, order, category) => {

    return searchImages(AUTH_PIXA_KEY, search, {
        per_page: 80,
        category: category,
        order: order,
        image_type: "photo",
        min_width: 200
    })
}



export default pixabay;