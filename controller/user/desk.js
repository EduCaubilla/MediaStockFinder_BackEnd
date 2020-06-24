import HTTPerror from '../../model/user/dao.js'

import userDAO from "../../model/user/dao.js"

const desk = async (req, res, next) => {
    try {
        const email = req.params.email;
        console.log(email);

        const user = await userDAO.findUser(email);

        if (!user) {
            next(HTTPerror(401, {
                message: "Wrong user id"
            }));
        } else {
            res.status(201).json(user);
        }

    } catch (error) {
        console.log('error', error);
    }
}

export default desk;