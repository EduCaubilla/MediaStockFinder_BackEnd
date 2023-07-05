import followRedirects from 'follow-redirects';

import photoDAO from '../../model/photo/dao.js';

const https = followRedirects.https;

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

                const externalReqPb = https.request(url, (externalRes) => {
                    res.setHeader("content-disposition", "attachment; filename=imageMsf." + extension);
                    externalRes.pipe(res);
                });
                externalReqPb.end();
                break;

            case ('pexels'):

                const externalReqPx = https.request(url, function (externalRes) {
                    res.setHeader("content-disposition", "attachment; filename=imageMsf." + extension);
                    externalRes.pipe(res);
                });
                externalReqPx.end();
                break;

            case ('unsplash'):

                const dataUns = await photoDAO.searchOne(idPhoto)

                const urlUns = await photoDAO.downloadPhoto(dataUns.links.download_location)

                const linkUns = urlUns.url

                var externalReqUns = https.request(linkUns, function (externalRes) {
                    res.setHeader("content-disposition", "attachment; filename=imageMsf.jpg");
                    externalRes.pipe(res);
                });
            
                externalReqUns.end();
                
                break;
        }

    } catch (err) {
        console.log('error en el controller' + err);
    }

}

export default downloadPhoto;