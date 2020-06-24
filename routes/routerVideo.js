import Router from 'express';

import searchList from '../controller/video/searchList.js';
import searchRandom from '../controller/video/searchRandom.js';
import searchOne from '../controller/video/searchOne.js';
import downloadVideo from '../controller/video/downloadVideo.js';


const router = Router();

router.route("/random").get(searchRandom);
router.route("/:search").get(searchList);

router.route("/page/:type/:id").get(searchOne);

router.route("/download/:type/:url").get(downloadVideo);


export default router;