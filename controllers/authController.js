const models = require('../models');
const Response = require('../utils/response');

const login = (req, res, next) => {

}

const register = async (req, res, next) => {
    try {
        const user = await models.UserModel.create(req.body);
        Response.success(res, user);
    } catch(err) {
        console.log(err.message)
        Response.error(res, err.message);
    }
}

module.exports = {
    login,
    register
}