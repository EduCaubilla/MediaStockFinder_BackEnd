import fetch from 'node-fetch';

import photoDAO from '../../model/photo/dao';

import unsplash from '../../model/photo/modelUnsplash';

import http from 'http';

global.fetch = fetch;

const dlPhoto = async (req, res, next) => {

    try {
        const idPhoto = req.params.id;
        console.log(idPhoto);

        res.setHeader("content-disposition", "attachment; filename=imagenMsf.jpg");

        // res.setHeader("content-disposition", "attachment; filename=" + filename);
        // request(videoUrl).pipe(res);

        let data = await photoDAO.dlPhoto(idPhoto);

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

// exports.getImage = function (req, res) {

//     var http = require('http');


//     var options = {
//         host: 'http://www.gettyimages.co.uk',
//         path: '/CMS/StaticContent/1391099215267_hero2.jpg',
//         method: 'GET',
//         headers: {
//             "content-type": "image/jpeg"
//         }
//     };

//     var request = http.request(options, function (response) {
//         var imagedata = '';
//         response.setEncoding('binary');

//         response.on('data', function (chunk) {
//             imagedata += chunk
//         });

//         response.on('end', function () {
//             console.log('imagedata: ', imagedata);
//             res.writeHead(200, {
//                 'Content-Type': 'image/jpeg'
//             });
//             res.send(imagedata);
//         });
//     }).on("error", function (e) {
//         console.log("Got error: " + e.message, e);
//     });

//     request.end();

// };

// var request = http.get(options, function (response) {
//     res.writeHead(response.statusCode, {
//         'Content-Type': response.headers['content-type']
//     });
//     response.pipe(res);
// }).on("error", function (e) {
//     console.log("Got error: " + e.message, e);
// });