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


}

export default new UserDAO;