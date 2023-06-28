
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

        console.log("SEARCH PXBAY", search);

        let data = await pixabay(search, page);

        console.log(data);

        return data;
    }

    async searchListPbRandom(page) {

        console.log("SEARCH PXBAY RANDOM");

        let data = await pixabayRandom(page);

        // console.log(data);


        return data;
    }

    async searchOnePb(id) {

        console.log("SEARCH ONE PXBAY", id);

        let data = await pixabayOne(id);

        return data;

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

        return data;
    }

    async searchListPxRandom(page) {

        console.log("SEARCH PEXELS RANDOM");

        let data = await pexels.videos
            .popular({
                page: page,
                per_page: 20,
            })

        return data;
    }

    async searchOnePx(id) {
        console.log("SEARCH ONE PEXELS", id);

        let data = await pexelsOne.videos
            .show({
                id: id
            })

        return data;
    }


}

export default new VideoDao();