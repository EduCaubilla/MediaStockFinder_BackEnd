import convert from '../../helper/convert.js';
import photoDAO from '../../model/photo/dao.js';

import dotenv from "dotenv";
import {
    createClient
} from "pexels";


// dotenv.config();


const pex = async (req, res, next) => {

    try {
        const search = req.params.search;
        console.log(search);

    //     const AUTH_PX_KEY = process.env.AUTH_PX_KEY;
        
    // const client = createClient(AUTH_PX_KEY);
    // const query = "dog";

    // await client.photos
    //     .search({
    //         query,
    //         per_page: 80
    //     })
    //     .then((photos) => {
    //         console.log(photos);
            
    //         res.json(photos);
    //     })
    //     .catch((error) => console.log(error));

        // // const type = 'pixabay';

        const data = await photoDAO.searchListPx(search);

        // console.log("entra Pixabay");

        res.status(201).json(data)

        console.log(data);
        

    } catch (error) {
        console.log('error' + error);
    }

}

export default pex;