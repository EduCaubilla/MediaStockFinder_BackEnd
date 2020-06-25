import dotenv from 'dotenv';
import convertPbVideo from '../../helper/video/convertPbVideo.js';
import convertPxVideo from '../../helper/video/convertPxVideo.js';

import videoDAO from '../../model/video/dao.js'

dotenv.config()

const searchList = async (req, res, next) => {
    try {

        const search = req.params.search;
        console.log(search);

        // const page = 1;

        const page = req.params.page;

        let resVideo = [];

        //PIXABAY

        const typePb = 'pixabay';

        const dataPb = await videoDAO.searchListPb(search, page);

        // console.log(dataPb);
        
        const resPb = convertPbVideo(dataPb, typePb);
        

        // PEXELS

        const typePx = 'pexels';

        const dataPx = await videoDAO.searchListPx(search, page);

        // console.log(dataPx);
        
        const resPx = convertPxVideo(dataPx, typePx);

        resVideo.push(...resPb, ...resPx);


        // console.log(resVideo);

        res.status(201).json(resVideo);

    } catch (error) {
        console.log('error' + error);

    }
}

export default searchList