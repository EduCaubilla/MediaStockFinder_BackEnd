import Router from 'express';

import login from '../controller/user/login.js';
import register from '../controller/user/register.js';
// import deleteUser from '../controller/user/deleteUser.js';
import desk from '../controller/user/desk.js'
import authUser from "../middleware/authentication.js";
import updateDesk from "../controller/user/updateDesk.js"


const router = Router();

router.route("/login").post(login);

router.route("/register").post(register);
// router.route("/:id").delete(deleteUser);

router.use(authUser);

router.route("/desk/:id")
    .get(desk)
    .post(updateDesk);


export default router;