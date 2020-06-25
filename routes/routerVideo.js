import Router from 'express';

import searchList from '../controller/video/searchList.js';
import searchRandom from '../controller/video/searchRandom.js';
import searchOne from '../controller/video/searchOne.js';
import downloadVideo from '../controller/video/downloadVideo.js';


const router = Router();

router.route("/download/*").get(downloadVideo);

router.route("/random/:page").get(searchRandom);
router.route("/:search/:page").get(searchList);

router.route("/page/:type/:id").get(searchOne);


export default router;