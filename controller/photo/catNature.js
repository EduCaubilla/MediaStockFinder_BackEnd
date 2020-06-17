import fetch from 'node-fetch';

import convert from '../../helper/convert.js';
import photoDAO from '../../model/photo/dao.js';

global.fetch = fetch;

const catNature = async (req, res, next) => {

    try {

        const category = 'nature';

        console.log(category);

        const data = await photoDAO.searchList(category);

        // console.log(data);

        const type = 'unsplash';

        const resUnsplash = convert(data, type);

        res.status(201).json(resUnsplash);


    } catch (error) {
        console.log('error' + error);
    }

}

export default catNature;