const models = require('../models');

class UserTokenController {
    static create(data) {
        return models.UserTokenModel.create(data);
    }

    static findOneAndUpdate(data) {
        const {username} = data;
        return models.UserTokenModel.findOneAndUpdate({username}, data, {upsert:true});
    }

    static findOneByUsername(username) {
        return models.UserTokenModel.findOne({username});
    }
}

module.exports = UserTokenController;