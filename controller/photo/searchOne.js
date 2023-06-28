
import convertOne from '../../helper/convertOne.js';
import convertOnePb from '../../helper/convertOnePb.js'
import convertOnePx from '../../helper/convertOnePx.js'

import photoDAO from '../../model/photo/dao.js';

const searchOne = async (req, res, next) => {

    try {

        const type = req.params.type;
        console.log(type);


        const id = req.params.id;
        console.log(id);


        switch (type) {
            case 'unsplash':
            const dataUns = await photoDAO.searchOne(id);

                const resUnsplash = convertOne(dataUns, type);

                res.status(201).json(resUnsplash);

                break;
            
            case 'pixabay':
                const dataPb = await photoDAO.searchOnePb(id);

                const resPixabay = convertOnePb(dataPb, type);

                res.status(201).json(resPixabay);

                break;

            case 'pexels':
                const dataPx = await photoDAO.searchOnePx(id);

                console.log(dataPx);
                
                const resPexels = convertOnePx(dataPx, type);

                res.status(201).json(resPexels);
            
        }


    } catch (error) {
        console.log('error' + error);
    }

}

export default searchOne;