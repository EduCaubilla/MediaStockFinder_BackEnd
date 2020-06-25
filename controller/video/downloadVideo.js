// import fetch from 'node-fetch';

// import https from 'https';

import {
    http,
    https
} from 'follow-redirects';

import atob from 'atob';

// global.fetch = fetch;

const downloadVideo = async (req, res, next) => {

    try {
        // const urlVideo1 = req.params[0];
        // console.log(urlVideo1);

        const urlVideo = req.params[0];
        console.log(urlVideo);

        // const typeVideo = req.params.type;
        // console.log(typeVideo);

        const url = atob(`${urlVideo}`);
        console.log(url);


        var externalReq = https.request(url, function (externalRes) {
            res.setHeader("content-disposition", "attachment; filename=videoMSF.mp4");
            externalRes.pipe(res);
        });

        externalReq.end();

    } catch (err) {
        console.log('error en el controller' + err);
    }

}

export default downloadVideo;