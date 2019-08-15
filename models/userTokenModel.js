const mongoose = require('mongoose');

const userTokenSchema = new mongoose.Schema({
    username: { type: String, index: true, required: true, unique: true },
    token: { type: String, index: true}
}, {
    timestamps: true
});

module.exports = mongoose.model('UserToken', userTokenSchema);