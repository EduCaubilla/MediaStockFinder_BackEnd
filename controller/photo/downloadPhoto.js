import {
    http,
    https
} from 'follow-redirects';

import photoDAO from '../../model/photo/dao';


const downloadPhoto = async (req, res, next) => {

    try {
        const idPhoto = req.params.id;
        console.log(idPhoto);

        const typePhoto = req.params.type;
        console.log(typePhoto);

        const urlPhoto = req.params[0];
        console.log(urlPhoto);

        const url = urlPhoto;

        const extension = url.split('.').pop();

        switch (typePhoto) {
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

                const dataUns = await photoDAO.searchOne(idPhoto)

                const urlUns = await photoDAO.downloadPhoto(dataUns)

                const linkUns = urlUns.url

                var externalReq = https.request(linkUns, function (externalRes) {

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