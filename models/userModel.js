const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    username: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    email: { type: String },
    name: { type: String },
}, {
    timestamps: true
});

userSchema.pre('save', async function (next) {
    try {
        const hash = await bcrypt.hash(this.password, 10);
        this.password = hash;
        return next();
    } catch (err) {
        return next(err);
    }
});

userSchema.methods.comparePassword = async function (password, next) {
    try {
        const result = await bcrypt.compare(password, this.password);
        return next(result);
    } catch (err) {
        return next(err);
    }
}

module.exports = mongoose.model('User', userSchema);