import {
    toJson
} from "unsplash-js";

import pixabay from '../../model/video/modelPixabay.js';
import pexels from '../../model/video/modelPexels.js';

import pixabayOne from '../../model/video/modelPixabayOne.js';
import pexelsOne from '../../model/video/modelPexelsOne.js';

import pixabayRandom from '../../model/video/modelPixabayRandom.js'


import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

class VideoDao {
    constructor() {}

    //-------------------- Pixabay methods

    async searchListPb(search, page) {

        // const AUTH_PIXA_KEY = process.env.AUTH_PIXA_KEY;

        // const per_page = 80;

        // return fetch(`https://pixabay.com/api/videos/?key=${AUTH_PIXA_KEY}&q=${search}&page=${page}&per_page=${per_page}`)
        //     .then(res => res.json())
        //     .then((json) => {
        //         res.json(json);
        //         console.log(json);
        //     });

        console.log("SEARCH PXBAY", search);

        let data = await pixabay(search, page);

        console.log(data);


        return toJson(data);
    }

    async searchListPbRandom(page) {

        console.log("SEARCH PXBAY RANDOM");

        let data = await pixabayRandom(page);

        console.log(data);


        return toJson(data);
    }

    async searchOnePb(id) {

        console.log("SEARCH ONE PXBAY", id);

        let data = await pixabayOne(id);

        return toJson(data);

    }

    //--------------------- Pexels methods

    async searchListPx(query, page) {

        console.log("SEARCH PEXELS", query);

        let data = await pexels.videos
            .search({
                query,
                page: page,
                per_page: 15,
            })

        return toJson(data);
    }

    async searchListPxRandom(page) {

        console.log("SEARCH PEXELS RANDOM");

        let data = await pexels.videos
            .popular({
                page: page,
                per_page: 15,
            })

        return toJson(data);
    }

    async searchOnePx(id) {
        console.log("SEARCH ONE PEXELS", id);

        let data = await pexelsOne.videos
            .show({
                id: id
            })

        return toJson(data);
    }


}

export default new VideoDao();