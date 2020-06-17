import fetch from 'node-fetch';

import convertOne from '../../helper/convertOne.js';
import photoDAO from '../../model/photo/dao';

global.fetch = fetch;

const searchOne = async (req, res, next) => {

    try {
        const idPhoto = req.params.id;
        console.log(idPhoto);
        
        // const type= req.params.type;

        const data = await photoDAO.searchOne(idPhoto);

        const type = 'unsplash';

        const resUnsplash = convertOne(data, type);

        res.status(201).json(resUnsplash);


    } catch (error) {
        console.log('error' + error);
    }

}

export default searchOne;