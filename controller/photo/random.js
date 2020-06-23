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

        const type = 'unsplash';

        // const resUnsplash = convertHeadless(data, type);
        let resPhoto = [];

        const data1 = await photoDAO.random(1);
        // console.log(data);
        const resUnsplash1 = convertHeadless(data1, type);

        const data2 = await photoDAO.random(2);
        // console.log(data);
        const resUnsplash2 = convertHeadless(data2, type);

        const data3 = await photoDAO.random(3);
        // console.log(data);
        const resUnsplash3 = convertHeadless(data3, type);

        // const data4 = await photoDAO.random(4);
        // // console.log(data);
        // const resUnsplash4 = convertHeadless(data4, type);

        // const data5 = await photoDAO.random(5);
        // // console.log(data);
        // const resUnsplash5 = convertHeadless(data5, type);

        //PEXELS

        const typePx = 'Pexels'

        const dataPx = await photoDAO.randomPx();

        const resPx = convertPx(dataPx, typePx);

        //PIXABAY

        const typePb = 'Pixabay';

        // search.replaceAll(',', '+')

        const search = '';

        const order = 'popular';

        const category = '';

        const dataPb = await photoDAO.searchListPb(search, order, category);

        console.log(dataPb);

        const resPb = convertPb(dataPb, typePb);


        resPhoto.push(...resUnsplash1, ...resUnsplash2, ...resUnsplash3,
            ...resPx, ...resPb);

        res.status(201).json(resPhoto);

        console.log(json(resPhoto));


    } catch (error) {
        console.log('error' + error);
    }

}

export default random;