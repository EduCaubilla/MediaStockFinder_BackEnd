import User from '../../model/user/model.js'
import connection from '../../dbMongo/mongo.js';

class UserDAO {

    constructor() {}

    async register(user) {
        return await new User(user).save();
    }

    async findUser(userEmail) {
      return await User.findOne({ email: userEmail }).exec();
    }

    async findUserById(id) {
        return await User.findById(id).exec();
    }

    async listOne(id) {
        return await User.findById(id).exec();
    }

    // Pendiente
  
    async updateUser(id, user) {
        console.log('LLEGA CONTRA DB' + user);
        return await User.findByIdAndUpdate(
            id,
            user,
            {
                'new': true
            });
    }

    async updateDesk(id, desk) {
        return await User.findByIdAndUpdate(
            id,
            {
                $push: {
                    'desk': desk
                }
            },
            {
                'new': true
            }
        )
    }

    async deleteUser(id) {
        return await User.findByIdAndRemove(id);
    }
}

export default new UserDAO;