import HTTPerror from '../../model/user/dao.js'

import userDAO from "../../model/user/dao.js"


const updateDesk = async (req, res, next) => {
    try {
        const newDeskItem = req.body;
        console.log(newDeskItem);

        const id = req.params.id;

        const user = await userDAO.findUserById(id);

        if (!user) {
            next(HTTPerror(401, {
                message: "Wrong user id"
            }));
        } else {
            user.desk.push(newDeskItem);
        }

        res.status(201).json(user.desk);

    } catch (error) {
        console.log('error', error);
    }
}

export default updateDesk;