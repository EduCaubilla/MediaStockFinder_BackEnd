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
            
                const dataPb = await photoDAO.searchOnePb(idPhoto)
                
                console.log("Descarga de Pixabay ------> \n");
                
                console.log(dataPb);

                const externalReqPb = https.request(dataPb.hits[0].largeImageURL, (externalRes) => {
                    res.setHeader("content-disposition", "attachment; filename=imageMsf." + extension);
                    externalRes.pipe(res);
                });
                externalReqPb.end();
                break;

            case ('pexels'):
                
                const dataPx = await photoDAO.searchOnePx(idPhoto)
                
                console.log("Descarga de Pexels ------> \n");
                
                console.log(dataPx);
                
                const externalReqPx = https.request(dataPx.src.original, (externalRes) => {
                    res.setHeader("content-disposition", "attachment; filename=imageMsf." + extension);
                    externalRes.pipe(res);
                });
                externalReqPx.end();
                break;

            case ('unsplash'):

                const dataUns = await photoDAO.searchOne(idPhoto)
                
                console.log("Descarga de Unsplash ------> \n");
                
                console.log(dataUns);

                const notifyDownload = await photoDAO.downloadPhoto(dataUns.links.download_location);

                console.log("Descarga notificada --------> " + notifyDownload);
                
                if (!notifyDownload) {
                  console.log("Error en la notificación de la descarga de Unsplash para " + idPhoto);
                }

                const linkUns = dataUns.urls.full;
                console.log('Link para descarga :>> ', linkUns);

                var externalReqUns = https.request(linkUns, (externalRes) => {
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