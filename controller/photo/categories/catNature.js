import convertUns from '../../../helper/convertUns.js'
import convertPx from '../../../helper/convertPx.js'
import convertPb from '../../../helper/convertPb.js'
import photoDAO from '../../../model/photo/dao.js';

const catNature = async (req, res, next) => {

    try {

        const search = 'nature';

        // console.log(data);

        const type = 'unsplash';

        let resPhoto = [];

        const data1 = await photoDAO.searchList(search, 1);
        // console.log(data);
        const resUnsplash1 = convertUns(data1, type);

        const data2 = await photoDAO.searchList(search, 2);
        // console.log(data);
        const resUnsplash2 = convertUns(data2, type);

        const data3 = await photoDAO.searchList(search, 3);
        // console.log(data);
        const resUnsplash3 = convertUns(data3, type);

        const data4 = await photoDAO.searchList(search, 4);
        // console.log(data);
        const resUnsplash4 = convertUns(data4, type);

        const data5 = await photoDAO.searchList(search, 5);
        // console.log(data);
        const resUnsplash5 = convertUns(data5, type);


        //PEXELS

        const typePx = 'pexels'

        const dataPx = await photoDAO.searchListPx(search, 1);

        const resPx = convertPx(dataPx, typePx);


        //PIXABAY

        const typePb = 'pixabay';

        // search.replaceAll(',', '+')

        const order = 'popular'

        const category = 'nature'

        const dataPb = await photoDAO.searchListPb(search, order, category, 1);

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