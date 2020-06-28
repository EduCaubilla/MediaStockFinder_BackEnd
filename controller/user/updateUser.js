import userDAO from '../../model/user/dao';

const updateUser = async (req, res, next) => {

    try {
        const id = req.params.id;
        const body = req.body;
        console.log('ENTRA USER PARA UPDATE' + body);

        const user = await userDAO.updateUser(id, body);

        console.log('SALE USER ACTUALIZADO' + user);

        res.status(201).json(user);

    } catch (error) {
        next(error);
    }
}

export default updateUser;