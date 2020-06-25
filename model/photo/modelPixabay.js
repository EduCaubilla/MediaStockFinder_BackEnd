import {
    searchImages
} from "pixabay-api";
import dotenv from "dotenv";

dotenv.config();

const AUTH_PIXA_KEY = process.env.AUTH_PIXA_KEY;

const pixabay = (search, order, category,page) => {

    return searchImages(AUTH_PIXA_KEY, search, {
        page: page,
        per_page: 30,
        category: category,
        order: order,
        image_type: "photo",
        min_width: 200
    })
}



export default pixabay;