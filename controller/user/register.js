import userDAO from "../../model/user/dao.js";
import bcrypt from "bcrypt";

const register = async (req, res, next) => {
    try {

        const body = req.body;

        const saltRounds = 10;

        const passwordHash = await bcrypt.hash(body.password, saltRounds);

        const newUser = {
            name: body.name,
            lastName: body.lastName,
            email: body.email,
            password: passwordHash,
        };

        // LLamar al DAO para guardar la información

        const user = await userDAO.register(newUser);

        // Enviar la respuesta

        res.status(201).json(user);

    } catch (err) {
        next(err);
    }
};

export default register;