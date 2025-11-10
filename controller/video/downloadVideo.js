import followRedirects from 'follow-redirects';

const https = followRedirects.https;

const downloadVideo = async (req, res, next) => {

    try {
        const urlVideo = req.params[0];
        console.log(urlVideo);

        const url = Buffer.from(urlVideo, 'base64').toString('binary');
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