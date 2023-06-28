import Router from "express";

import catFoodDrink from '../controller/photo/categories/catFoodDrink.js';
import catLatest from '../controller/photo/categories/catLatest.js';
import catNature from '../controller/photo/categories/catNature.js';
import catPeople from '../controller/photo/categories/catPeople.js';
import downloadPhoto from '../controller/photo/downloadPhoto.js';
import oneRandom from '../controller/photo/oneRandom.js';
import random from '../controller/photo/random.js';
import searchList from '../controller/photo/searchList.js';
import searchOne from '../controller/photo/searchOne.js';


const router = Router();

router.route('/categories/food&drink').get(catFoodDrink);
router.route('/categories/latest').get(catLatest);
router.route('/categories/nature').get(catNature);
router.route('/categories/people').get(catPeople);

router.route("/download/:id/:type/*").get(downloadPhoto);

router.route("/onerandom").get(oneRandom);
router.route('/random/:page').get(random);

router.route("/:search/:page").get(searchList);
router.route("/page/:type/:id").get(searchOne);

export default router;