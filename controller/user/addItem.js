import userDAO from '../../model/user/dao';

const addItem = async (req, res, next) => {

    try {
        const id = req.params.id;
        const desk = req.body;
        console.log(desk);

        const member = await userDAO.updateDesk(id, desk);

        res.status(201).json(member);

    } catch (error) {
        next(error);
    }
}

export default addItem;