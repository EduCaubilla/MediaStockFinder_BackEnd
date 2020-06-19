import fetch from 'node-fetch';
// import Msf from '../../helper/msf.js';
import convert from '../../helper/convert.js';
import photoDAO from '../../model/photo/dao.js';

global.fetch = fetch;

const searchList = async (req, res, next) => {

    try {
        const search = req.params.search;
        // console.log(search);
        const type = 'unsplash';

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

        // console.log(resUnsplash)

        res.status(201).json(resUnsplash);


    } catch (error) {
        console.log('error' + error);
    }

}

export default searchList;