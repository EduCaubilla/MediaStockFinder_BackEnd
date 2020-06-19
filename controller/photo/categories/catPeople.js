import fetch from 'node-fetch';

import convert from '../../../helper/convert.js';
import photoDAO from '../../../model/photo/dao.js';

global.fetch = fetch;

const catPeople = async (req, res, next) => {

    try {

        const search = 'people';

        // console.log(category);

        // const data = await photoDAO.searchList(category);

        // console.log(data);

        const type = 'unsplash';

        // const resUnsplash = convert(data, type);

        let resUnsplash = [];

        const data1 = await photoDAO.searchList(search, 1);
        // console.log(data);
        const resUnsplash1 = convert(data1, type);

        const data2 = await photoDAO.searchList(search, 2);
        // console.log(data);
        const resUnsplash2 = convert(data2, type);

        const data3 = await photoDAO.searchList(search, 3);
        // console.log(data);
        const resUnsplash3 = convert(data3, type);

        const data4 = await photoDAO.searchList(search, 4);
        // console.log(data);
        const resUnsplash4 = convert(data4, type);

        const data5 = await photoDAO.searchList(search, 5);
        // console.log(data);
        const resUnsplash5 = convert(data5, type);

        resUnsplash.push(...resUnsplash1, ...resUnsplash2, ...resUnsplash3, ...resUnsplash4, ...resUnsplash5);

        res.status(201).json(resUnsplash);


    } catch (error) {
        console.log('error' + error);
    }

}

export default catPeople;