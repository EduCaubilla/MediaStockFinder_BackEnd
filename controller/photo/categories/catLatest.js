import fetch from 'node-fetch';

import convertLatest from '../../../helper/convertHeadless.js';
import photoDAO from '../../../model/photo/dao.js';

global.fetch = fetch;

const catLatest = async (req, res, next) => {

    try {

        // const category = 'people';

        // console.log(category);

        // const data = await photoDAO.searchLatest();

        const type = 'unsplash';

        // const resUnsplash = convertLatest(data, type);

        let resUnsplash = [];

        const data1 = await photoDAO.searchLatest(1);
        // console.log(data);
        const resUnsplash1 = convertLatest(data1, type);

        const data2 = await photoDAO.searchLatest(2);
        // console.log(data);
        const resUnsplash2 = convertLatest(data2, type);

        const data3 = await photoDAO.searchLatest(3);
        // console.log(data);
        const resUnsplash3 = convertLatest(data3, type);

        const data4 = await photoDAO.searchLatest(4);
        // console.log(data);
        const resUnsplash4 = convertLatest(data4, type);

        const data5 = await photoDAO.searchLatest(5);
        // console.log(data);
        const resUnsplash5 = convertLatest(data5, type);

        resUnsplash.push(...resUnsplash1, ...resUnsplash2, ...resUnsplash3, ...resUnsplash4, ...resUnsplash5);


        res.status(201).json(resUnsplash);


    } catch (error) {
        console.log('error' + error);
    }

}

export default catLatest;