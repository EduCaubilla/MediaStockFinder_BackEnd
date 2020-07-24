import convertUns from '../../../helper/convertUns.js';
import convertPx from '../../../helper/convertPx.js'
import convertPb from '../../../helper/convertPb.js'
import photoDAO from '../../../model/photo/dao.js';

const catLatest = async (req, res, next) => {

    try {
        //UNSPLASH

        const type = 'unsplash';

        let resPhoto = [];

        const data1 = await photoDAO.searchLatest(1);
        const resUnsplash1 = convertUns(data1, type);

        const data2 = await photoDAO.searchLatest(2);
        const resUnsplash2 = convertUns(data2, type);

        const data3 = await photoDAO.searchLatest(3);
        const resUnsplash3 = convertUns(data3, type);

        const data4 = await photoDAO.searchLatest(4);
        const resUnsplash4 = convertUns(data4, type);

        const data5 = await photoDAO.searchLatest(5);
        const resUnsplash5 = convertUns(data5, type);

        //PEXELS

        const typePx = 'pexels'

        const dataPx = await photoDAO.randomPx(1);

        const resPx = convertPx(dataPx, typePx);

        //PIXABAY

        const typePb = 'pixabay';

        // search.replaceAll(',', '+')

        const order = 'latest'

        const search = ''

        const category = ''

        const dataPb = await photoDAO.searchLatestPb(search, order, category, 1);

        // console.log(dataPb);

        const resPb = convertPb(dataPb, typePb);


        resPhoto.push(...resUnsplash1, ...resUnsplash2, ...resUnsplash3,
            ...resUnsplash4, ...resUnsplash5, ...resPx, ...resPb);

        res.status(201).json(resPhoto);


    } catch (error) {
        console.log('error' + error);
    }

}

export default catLatest;