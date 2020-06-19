import fetch from 'node-fetch';

import photoDAO from '../../model/photo/dao';

import unsplash from '../../model/photo/modelUnsplash';

global.fetch = fetch;

const dlPhoto = async (req, res, next) => {

    try {
        const idPhoto = req.params.id;
        console.log(idPhoto);

        // res.setHeader("content-disposition", "attachment; filename=imagenMsf.jpg");

        // let data = await photoDAO.dlPhoto(idPhoto);

        // console.log(data);

        // // .pipe(res);
        // res.status(201).json(data);


        // return unsplash.photos.getPhoto(idPhoto)
        //     .then(toJson)
        //     .then(json => {
        //         console.log(json);

        //         // console.log(json.links.download_location);
        //         // unsplash.photos.downloadPhoto(json.links.download_location);
        //         unsplash.photos.downloadPhoto(json);
        //     });


    } catch (err) {
        console.log('error en el controller' + err);
    }


}

export default dlPhoto;