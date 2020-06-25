import fetch from 'node-fetch';
import convertUns from '../../helper/convertUns.js';
import convertPb from '../../helper/convertPb.js';
import convertPx from '../../helper/convertPx.js';

import photoDAO from '../../model/photo/dao.js';


// global.fetch = fetch;

const searchList = async (req, res, next) => {

    try {
        const search = req.params.search;
        console.log(search);

        const page = req.params.page;

        //UNSPLASH
        const type = 'Unsplash';

        let resPhoto = [];

        const dataUns = await photoDAO.searchList(search, page);
        // console.log(data);
        const resUns = convertUns(dataUns, type);


        //PEXELS

        const typePx = 'Pexels'

        const dataPx = await photoDAO.searchListPx(search, page);

        const resPx = convertPx(dataPx, typePx);


        //PIXABAY

        const typePb = 'Pixabay';

        // const searchPb = search.replaceAll(',', '+')

        const order = 'popular';

        const category = '';

        const dataPb = await photoDAO.searchListPb(search, order, category, page);

        console.log(dataPb);

        const resPb = convertPb(dataPb, typePb);


        resPhoto.push(...resUns, ...resPb, ...resPx);

        console.log(resPhoto)

        res.status(201).json(resPhoto);


    } catch (error) {
        console.log('error' + error);
    }

}

export default searchList;