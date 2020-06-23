import fetch from 'node-fetch';

import convert from '../../../helper/convert.js';
import convertPx from '../../../helper/convertPx.js'
import convertPb from '../../../helper/convertPb.js'
import photoDAO from '../../../model/photo/dao.js';

global.fetch = fetch;

const catNature = async (req, res, next) => {

    try {

        const search = 'nature';

        // console.log(category);

        // const data = await photoDAO.searchList(category);

        // console.log(data);

        const type = 'unsplash';

        // const resUnsplash = convert(data, type);

        let resPhoto = [];

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


        //PEXELS

        const typePx = 'Pexels'

        const dataPx = await photoDAO.searchListPx(search);

        const resPx = convertPx(dataPx, typePx);


        //PIXABAY

        const typePb = 'Pixabay';

        // search.replaceAll(',', '+')

        const order = 'popular'

        const category = 'nature'

        const dataPb = await photoDAO.searchListPb(search, order, category);

        // console.log(dataPb);

        const resPb = convertPb(dataPb, typePb);


        resPhoto.push(...resUnsplash1, ...resUnsplash2, ...resUnsplash3,
            ...resUnsplash4, ...resUnsplash5, ...resPx, ...resPb);

        res.status(201).json(resPhoto);


    } catch (error) {
        console.log('error' + error);
    }

}

export default catNature;