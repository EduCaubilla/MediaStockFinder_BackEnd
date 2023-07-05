import convertPx from '../../helper/convertPx.js'
import convertPb from '../../helper/convertPb.js'
import photoDAO from '../../model/photo/dao.js';
import convertUns from '../../helper/convertUns.js';

const random = async (req, res, next) => {

  try {
        //UNSPLASH  

        const page = req.params.page;

        const typeUns = 'unsplash';

        let resPhoto = [];

        const dataUns = await photoDAO.random(page);

        const resUns = convertUns(dataUns, typeUns);

        //PEXELS

        const typePx = 'pexels'

        const dataPx = await photoDAO.randomPx(page);

        const resPx = convertPx(dataPx, typePx);

        //PIXABAY

        const typePb = 'pixabay';

        const search = '';

        const order = 'popular';

        const category = '';

        const dataPb = await photoDAO.searchListPb(search, order, category, page);

        const resPb = convertPb(dataPb, typePb);
      
        // COMPLETE RESPONSE

        resPhoto.push(...resUns, ...resPx, ...resPb);

        res.status(201).json(resPhoto);
    
        console.log("Random list response items -------->" + resPhoto.length);

    } catch (error) {
        console.log('error' + error);
    }
}

export default random;