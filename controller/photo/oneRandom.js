import fetch from 'node-fetch';

import convertOneRandom from '../../helper/convertOneRandom.js';

import photoDAO from '../../model/photo/dao.js';

global.fetch = fetch;

const oneRandom = async (req, res, next) => {

    try {

        const data = await photoDAO.getOneRandom();

        console.log(data);


        const type = 'unsplash';

        const resUnsplash = convertOneRandom(data, type);

        res.status(201).json(resUnsplash);


    } catch (error) {
        console.log('error' + error);
    }

}

export default oneRandom;