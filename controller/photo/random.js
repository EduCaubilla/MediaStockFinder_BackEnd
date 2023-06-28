import convertPx from '../../helper/convertPx.js'
import convertPb from '../../helper/convertPb.js'
import photoDAO from '../../model/photo/dao.js';
import convertUns from '../../helper/convertUns.js';

const random = async (req, res, next) => {

    try {
        const page = req.params.page;

        const typeUns = 'unsplash';

        let resPhoto = [];

        const dataUns = await photoDAO.random(page);

        const resUns = convertUns(dataUns, typeUns);
      
        console.log("Response random Unsplash -> " + resUns);

        //PEXELS

        const typePx = 'pexels'

        const dataPx = await photoDAO.randomPx(page);

        const resPx = convertPx(dataPx, typePx);
        
        console.log("Response random Pexels -> " + resPx);

        //PIXABAY

        const typePb = 'pixabay';

        // search.replaceAll(',', '+')

        const search = '';

        const order = 'popular';

        const category = '';

        const dataPb = await photoDAO.searchListPb(search, order, category, page);

        // console.log(dataPb);

        const resPb = convertPb(dataPb, typePb);
      
        console.log("Response random Pixabay -> " + resPb);

        resPhoto.push(...resUns, ...resPx, ...resPb);

        res.status(201).json(resPhoto);

        // console.log(json(resPhoto));


    } catch (error) {
        console.log('error' + error);
    }

}

export default random;