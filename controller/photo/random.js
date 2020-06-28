import fetch from 'node-fetch';

import convertHeadless from '../../helper/convertHeadless.js';
import convertPx from '../../helper/convertPx.js'
import convertPb from '../../helper/convertPb.js'
import photoDAO from '../../model/photo/dao.js';

global.fetch = fetch;

const random = async (req, res, next) => {

    try {
        // const data = await photoDAO.random();

        // console.log(data);

        const page = req.params.page;

        const typeUns = 'unsplash';

        // const resUnsplash = convertHeadless(data, type);
        let resPhoto = [];

        const dataUns = await photoDAO.random(page);
        // console.log(data);
        const resUns = convertHeadless(dataUns, typeUns);


        //PEXELS

        const typePx = 'pexels'

        const dataPx = await photoDAO.randomPx(page);

        const resPx = convertPx(dataPx, typePx);

        //PIXABAY

        const typePb = 'pixabay';

        // search.replaceAll(',', '+')

        const search = '';

        const order = 'popular';

        const category = '';

        const dataPb = await photoDAO.searchListPb(search, order, category, page);

        // console.log(dataPb);

        const resPb = convertPb(dataPb, typePb);


        resPhoto.push(...resUns, ...resPx, ...resPb);

        res.status(201).json(resPhoto);

        // console.log(json(resPhoto));


    } catch (error) {
        console.log('error' + error);
    }

}

export default random;