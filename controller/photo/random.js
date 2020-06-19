import fetch from 'node-fetch';

import convertHeadless from '../../helper/convertHeadless.js';
import photoDAO from '../../model/photo/dao.js';

 global.fetch = fetch;

const random = async (req, res, next) => {

    try {
        // const data = await photoDAO.random();

        // console.log(data);

        const type = 'unsplash';

        // const resUnsplash = convertHeadless(data, type);
        let resUnsplash = [];

        const data1 = await photoDAO.random(1);
        // console.log(data);
        const resUnsplash1 = convertHeadless(data1, type);

        const data2 = await photoDAO.random(2);
        // console.log(data);
        const resUnsplash2 = convertHeadless(data2, type);

        const data3 = await photoDAO.random(3);
        // console.log(data);
        const resUnsplash3 = convertHeadless(data3, type);

        const data4 = await photoDAO.random(4);
        // console.log(data);
        const resUnsplash4 = convertHeadless(data4, type);

        const data5 = await photoDAO.random(5);
        // console.log(data);
        const resUnsplash5 = convertHeadless(data5, type);

        resUnsplash.push(...resUnsplash1, ...resUnsplash2, ...resUnsplash3, ...resUnsplash4, ...resUnsplash5);

        res.status(201).json(resUnsplash);

        console.log(json(resUnsplash));


    } catch (error) {
        console.log('error' + error);
    }

}

export default random;