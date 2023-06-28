import userDAO from '../../model/user/dao.js';

const deleteItem = async (req, res, next) => {

    try {
        const itemId = req.params.id;
        // const desk = req.body;
        // console.log(desk);

        const item = await userDAO.deleteItem(itemId);

        res.status(201).json(item);

    } catch (error) {
        next(error);
    }
}

export default deleteItem;