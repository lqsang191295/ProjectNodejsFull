const models = require('../models');
const Response = require('../utils/response');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const SECRET = require('../config').SECRET;
const UserController = require('./userController');
const UserTokenController = require('./userTokenController');


const generateAuthToken = async (user) => {
    const token = jwt.sign(user, SECRET);
    const {username} = user;
    await UserTokenController.findOneAndUpdate({
        username,
        token
    })
    return token;
}

const login = async (req, res, next) => {
    try {
        const {username, password} = req.body;
        const user = await UserController.findOneByUsername(username);
        if(user) {
            const isMatchPassword = await comparePassword(password, user.password);
            if(isMatchPassword) {
                const {username, password, _id, name, email} = user;
                const token = await generateAuthToken({_id});
                Response.success(res, {token, username, _id, name, email})
            } else {
                Response.error(res, {error: {
                    code: 'NO_MATCH_PASSWORD'
                }})
            }
        } else {
            Response.error(res, {error: {
                code: 'NO_USER'
            }})
        }
    } catch (err) {
        Response.error(res, err);
    } 
}

const register = async (req, res, next) => {
    try {
        const user = await UserController.create(req.body);
        Response.success(res, user);
    } catch(err) {
        Response.error(res, err);
    }
}

const comparePassword = async (password, password1) => {
    try {
        const result = await bcrypt.compare(password, password1);
        return result;
    } catch (err) {
        return err;
    }
}

module.exports = {
    login,
    register,
    comparePassword
}