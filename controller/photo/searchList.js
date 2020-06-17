import Unsplash, {
    toJson
} from "unsplash-js";
import fetch from 'node-fetch';
// import Msf from '../../helper/msf.js';
import convert from '../../helper/convert.js';
import photoDAO from '../../model/photo/dao.js';

global.fetch = fetch;

const searchList = async (req, res, next) => {

    try {
        const search = req.params.search;

        // console.log(search);

        const data = await photoDAO.searchList(search);

        // console.log(data);

        const type = 'unsplash';

        const resUnsplash = convert(data, type);

        res.status(201).json(resUnsplash);


    } catch (error) {
        console.log('error' + error);
    }

}

export default searchList;