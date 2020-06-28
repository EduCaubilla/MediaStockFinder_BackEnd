import Router from 'express';

import login from '../controller/user/login.js';
import register from '../controller/user/register.js';
import listOneUser from '../controller/user/listOneUser.js';
import updateUser from '../controller/user/updateUser.js';
import deleteUser from '../controller/user/deleteUser.js';
import authUser from "../middleware/authentication.js";
import addItem from '../controller/user/addItem.js';
import deleteItem from '../controller/user/deleteItem.js';


const router = Router();

router.route("/login").post(login);

router.route("/register").post(register);

router.use(authUser);

router.route('/:id')
    .get(listOneUser)
    .post(updateUser)
    .delete(deleteUser);

router.route('/desk/:id')
    .post(addItem)

export default router;