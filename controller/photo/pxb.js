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
        console.log(search);


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



        // let resUnsplash = [];

        // const data1 = await photoDAO.searchList(search, 1);
        // // console.log(data);
        // const resUnsplash1 = convert(data1, type);

        // const data2 = await photoDAO.searchList(search, 2);
        // // console.log(data);
        // const resUnsplash2 = convert(data2, type);

        // const data3 = await photoDAO.searchList(search, 3);
        // // console.log(data);
        // const resUnsplash3 = convert(data3, type);

        // const data4 = await photoDAO.searchList(search, 4);
        // // console.log(data);
        // const resUnsplash4 = convert(data4, type);

        // const data5 = await photoDAO.searchList(search, 5);
        // // console.log(data);
        // const resUnsplash5 = convert(data5, type);

        // resUnsplash.push(...resUnsplash1, ...resUnsplash2, ...resUnsplash3, ...resUnsplash4, ...resUnsplash5);

        // console.log(resUnsplash)

        // res.status(201).json(resUnsplash);


    } catch (error) {
        console.log('error' + error);
    }

}

export default pxb;