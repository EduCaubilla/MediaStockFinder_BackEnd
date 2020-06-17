import fetch from 'node-fetch';

import convert from '../../helper/convert.js';
import photoDAO from '../../model/photo/dao.js';


const random = async (req, res, next) => {

    try {

        global.fetch = fetch;

        const data = await photoDAO.random();

        // console.log(data);

        const type = 'unsplash';

        const resUnsplash = convert(data, type);

        res.status(201).json(resUnsplash);


    } catch (error) {
        console.log('error' + error);
    }

}

export default random;