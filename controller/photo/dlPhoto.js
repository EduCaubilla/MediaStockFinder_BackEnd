import fetch from 'node-fetch';

import convertOne from '../../helper/convertOne.js';
import photoDAO from '../../model/photo/dao';
import { json } from 'express';

global.fetch = fetch;

const dlPhoto = async (req, res, next) => {

    try {
        const idPhoto = params.url
        console.log(link);

        let data = await photoDAO.dlPhoto(idPhoto);

        res.status(201).json(data);



    } catch (err) {
        console.log('error en el controller' + error);
        
    }


}

export default dlPhoto;