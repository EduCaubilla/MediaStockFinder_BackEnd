// import fetch from 'node-fetch';

// import http from 'http';

import {
    http,
    https
} from 'follow-redirects';

// global.fetch = fetch;

const dlPhoto = async (req, res, next) => {

    try {
        const urlVideo = req.params.url;
        console.log(urlVideo);

        const typePhoto = req.params.type;
        console.log(typePhoto);

        const url = urlVideo;

        var externalReq = https.request(url, function (externalRes) {
            res.setHeader("content-disposition", "attachment; filename=imageMsf.mp4");
            externalRes.pipe(res);
        });

        externalReq.end();

    } catch (err) {
        console.log('error en el controller' + err);
    }

}

export default dlPhoto;