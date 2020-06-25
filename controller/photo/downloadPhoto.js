// import fetch from 'node-fetch';

// import http from 'http';

import {
    http,
    https
} from 'follow-redirects';

// global.fetch = fetch;

const downloadPhoto = async (req, res, next) => {

    try {
        const typePhoto = req.params.type;
        console.log(typePhoto);

        const urlPhoto = req.params[0];
        console.log(urlPhoto);

        const url = urlPhoto;

        const extension = url.split('.').pop();

        switch (typePhoto) {
            case ('pixabay'):

                var externalReq = https.request(url, function (externalRes) {

                    res.setHeader("content-disposition", "attachment; filename=imageMSF." + extension);
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

                    res.setHeader("content-disposition", "attachment; filename=imageMsf.jpg");
                    externalRes.pipe(res);
                });
                externalReq.end();
                break;
        }

    } catch (err) {
        console.log('error en el controller' + err);
    }

}

export default downloadPhoto;