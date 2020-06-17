import Router from "express";

import searchList from '../controller/photo/searchList.js';
import searchOne from '../controller/photo/searchOne.js';
import random from '../controller/photo/random.js';
import catNature from '../controller/photo/catNature.js';
import catPeople from '../controller/photo/catPeople.js';
import catFoodDrink from '../controller/photo/catFoodDrink.js';
import dlPhoto from '../controller/photo/dlPhoto.js';



const router = Router();

router.route('/categories/nature').get(catNature);
router.route('/categories/people').get(catPeople);
router.route('/categories/food&drink').get(catFoodDrink);

router.route("/download/:id").get(dlPhoto);

router.route("/:search").get(searchList);

router.route('/random').get(random);

router.route("/:type/:id").get(searchOne);




export default router;