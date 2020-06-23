import convert from '../../helper/convert.js';
import photoDAO from '../../model/photo/dao.js';

import {
    searchImages
} from "pixabay-api";
// import { searchVideos } from "pixabay-api";
// import { authenticate } from "pixabay-api";
import dotenv from "dotenv";

dotenv.config();


const pxb = async (req, res, next) => {

    try {
        const search = req.params.search;
        console.log("PARAMS PIXABAY",search);

        // // const type = 'pixabay';

        const data = await photoDAO.searchListPb(search);

        // console.log("entra Pixabay");

        // console.log(data);
        
        res.status(201).json(data)

        // const AUTH_PIXA_KEY = process.env.AUTH_PIXA_KEY;

        // await searchImages(AUTH_PIXA_KEY, search, {
        //         per_page: 200,
        //         // category: "people",
        //         order: "latest"
        //     })
        //     .then((r) => {
        //         console.log(r);
        //         res.json(r);
        //     })
        //     .catch((error) => console.log(error));


    } catch (error) {
        console.log('error' + error);
    }

}

export default pxb;