import connection from '../../dbMongo/mongo.js'
import User from '../../model/user/model'

class UserDAO {

    constructor() {}

    register(user) {
        return new User(user).save();
    }

    findUser(email) {
        return User.findOne(email);
    }

    findUserById(id) {
        return User.findById(id);
    }

    listOne(id) {
        return User.findById(id);
    }

    updateUser(id, user) {
        console.log('LLEGA CONTRA DB' + user);
        return User.findByIdAndUpdate(
            id,
            user, {
                'useFindAndModify': false,
                'new': true
            });
    }

    updateDesk(id, desk) {
        return User.findByIdAndUpdate(
            id, {
                $push: {
                    'desk': desk
                }
            }, {
                'useFindAndModify': false,
                'new': true
            }

        )
    }

    deleteUser(id) {
        return User.findByIdAndRemove(id);
    }

}

export default new UserDAO;