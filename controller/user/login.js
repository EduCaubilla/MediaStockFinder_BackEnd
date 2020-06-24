import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import HTTPerror from "http-errors";

import userDAO from "../../model/user/dao.js";

//recibir usr & password
// comprobar que user existe
// comprobar pass encriptada
// crear token
// devolver token

const login = async (req, res, next) => {
    try {

        const body = req.body;

        console.log(body);

        const user = await userDAO.findUser({
            email: body.email
        });

        console.log(user);
        
        const passwordCorrect =
            user === null ?
            false :
            await bcrypt.compare(body.password, user.password);

        if (!(user && passwordCorrect)) {
            next(HTTPerror(401, {
                message: "Wrong data inserted"
            }));
        } else {
            const userToken = {
                user: user.email,
                id: user.id,
            };

            const token = await jwt.sign(userToken, process.env.SECRET);

            res.status(201).json({
                token
            });
        }
    } catch (error) {
        console.log("error" + error);
    }
};

export default login;