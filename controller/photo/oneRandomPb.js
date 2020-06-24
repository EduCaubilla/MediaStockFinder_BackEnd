// import fetch from 'node-fetch';

import convertOneRandom from '../../helper/convertOneRandom.js';

import photoDAO from '../../model/photo/dao.js';
import convertOnePb from '../../helper/convertOnePb.js';

// global.fetch = fetch;

const oneRandom = async (req, res, next) => {

    try {

        const data = await photoDAO.getOneRandomPb();

        console.log(data);

        const type = 'pixabay';

        const resPb = convertOnePb(data, type);

        res.status(201).json(resPb);


    } catch (error) {
        console.log('error' + error);
    }

}

export default oneRandom;