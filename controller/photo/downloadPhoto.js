// import fetch from 'node-fetch';

// import http from 'http';

import {
    http,
    https
} from 'follow-redirects';

// global.fetch = fetch;

const downloadPhoto = async (req, res, next) => {

    try {
        const urlPhoto = req.params.url;
        console.log(urlPhoto);

        const url = urlPhoto;

        const typePhoto = req.params.type;
        console.log(typePhoto);

        const extension = url.split('.').pop();

        switch (type) {
            case ('pixabay'):

                var externalReq = https.request(url, function (externalRes) {

                    res.setHeader("content-disposition", "attachment; filename=imageMsf." + extension);
                    externalRes.pipe(res);
                });
                externalReq.end();
                break;

            case ('pexels'):

                var externalReq = https.request(url, function (externalRes) {

                    res.setHeader("content-disposition", "attachment; filename=imageMsf." + extension);
                    externalRes.pipe(res);
                });
                externalReq.end();
                break;

            case ('unsplash'):

                var externalReq = https.request(url, function (externalRes) {

                    res.setHeader("content-disposition", "attachment; filename=imageMsf." + extension);
                    externalRes.pipe(res);
                });
                externalReq.end();
                break;
        }

        // res.setHeader("content-disposition", "attachment; filename=imagenMsf.jpg");

        // res.setHeader("content-disposition", "attachment; filename=" + filename);
        // request(videoUrl).pipe(res);

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

export default downloadPhoto;