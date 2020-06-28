import userDAO from '../../model/user/dao.js';

const listOneUser = async (req, res, next) => {
    try {
        const id = req.params.id;

        const user = await userDAO.listOne(id);

        res.status(201).json({
            user
        });

    } catch (error) {
        next(error);
    }
}

export default listOneUser;