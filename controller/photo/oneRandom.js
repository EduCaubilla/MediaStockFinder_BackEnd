import photoDAO from '../../model/photo/dao.js';
import convertOne from '../../helper/convertOne.js';
import convertOnePb from '../../helper/convertOnePb.js';

const oneRandom = async (req, res, next) => {

    try {

        const dataUns = await photoDAO.getOneRandom();

        const typeUns = 'unsplash';

        const resUnsplash = convertOne(dataUns, typeUns);

        console.log('ONE PHOTO UNSPLASH: ', resUnsplash);

        const dataPb = await photoDAO.getOneRandomPb();

        const typePb = 'pixabay';

        const resPb = convertOnePb(dataPb, typePb);

        if (resUnsplash !== 'undefined' && Math.random() >= 0.5) {
            res.status(201).json(resUnsplash);
        } else {
            res.status(201).json(resPb);
        }

    } catch (error) {
        console.log('error' + error);
    }

}

export default oneRandom;