import dotenv from 'dotenv';
import convertPbVideo from '../../helper/video/convertPbVideo.js';
import convertPxVideo from '../../helper/video/convertPxVideo.js';

import videoDAO from '../../model/video/dao.js'

dotenv.config()

const searchRandom = async (req, res, next) => {
    try {

        const search = 'random';

        const page = 1;

        let resVideo = [];


        //PIXABAY

        const typePb = 'pixabay';

        const dataPb = await videoDAO.searchListPbRandom(page);

        // console.log(dataPb);

        const resPb = convertPbVideo(dataPb, typePb);


        // PEXELS

        const typePx = 'pexels';

        const dataPx = await videoDAO.searchListPxRandom(page);

        console.log(dataPx);

        const resPx = convertPxVideo(dataPx, typePx);


        resVideo.push(...resPb, ...resPx);

        console.log(resVideo);

        res.status(201).json(resVideo);

    } catch (error) {
        console.log('error' + error);

    }
}

export default searchRandom;