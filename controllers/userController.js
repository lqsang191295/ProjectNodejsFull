const models = require('../models');

class UserController {
    static create(data) {
        return models.UserModel.create(data);
    }

    static findOneByUsername(username) {
        return models.UserModel.findOne({username});
    }

    static findOneById(_id) {
        return models.UserModel.findOne({_id});
    }
}

module.exports = UserController;