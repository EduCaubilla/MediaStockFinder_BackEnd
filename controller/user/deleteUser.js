import userDAO from '../../model/user/dao.js';

const deleteUser = async (req, res, next) => {

    try {
        const id = req.params.id;

        const member = await userDAO.deleteUser(id);

        res.status(201).json(member);

    } catch (error) {
        next(error);
    }
}

export default deleteUser;