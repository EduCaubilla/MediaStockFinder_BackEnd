import Router from "express";

import searchList from '../controller/photo/searchList.js';
import searchOne from '../controller/photo/searchOne.js';
import random from '../controller/photo/random.js';
import catNature from '../controller/photo/categories/catNature.js';
import catPeople from '../controller/photo/categories/catPeople.js';
import catFoodDrink from '../controller/photo/categories/catFoodDrink.js';
import downloadPhoto from '../controller/photo/downloadPhoto.js';
import catLatest from '../controller/photo/categories/catLatest.js';
import oneRandom from '../controller/photo/oneRandom.js';
import oneRandomPb from '../controller/photo/oneRandomPb.js';



const router = Router();


router.route('/categories/nature').get(catNature);
router.route('/categories/people').get(catPeople);
router.route('/categories/food&drink').get(catFoodDrink);
router.route('/categories/latest').get(catLatest);

router.route('/random').get(random);
router.route("/onerandom").get(oneRandomPb);

router.route("/:search").get(searchList);
router.route("/page/:type/:id").get(searchOne);

router.route("/download/:type/:url").get(downloadPhoto);


export default router;