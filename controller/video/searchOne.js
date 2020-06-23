import dotenv from 'dotenv';
import convertOnePbVideo from '../../helper/video/convertOnePbVideo.js';
import convertOnePxVideo from '../../helper/video/convertOnePxVideo.js';

import videoDAO from '../../model/video/dao.js'

dotenv.config()

const searchList = async (req, res, next) => {
    try {

        const type = req.params.type;
        console.log(type);


        const id = req.params.id;
        console.log(id);


        switch (type) {
            case 'pixabay':
                const dataPb = await videoDAO.searchOnePb(id);

                console.log(dataPb);

                const responsePb = convertOnePbVideo(dataPb, 'pixabay');

                res.status(201).json(responsePb);

                break;

            case 'pexels':
                const dataPx = await videoDAO.searchOnePx(id);

                console.log(dataPx);

                const responsePx = convertOnePxVideo(dataPx, 'pexels');

                res.status(201).json(responsePx);

        }


    } catch (error) {
        console.log('error general' + error);

    }
}

export default searchList