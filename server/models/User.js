const mongoose = require(`mongoose`)
const Schema = mongoose.Schema
let helpers = require(`../helpers/helpers`)

var userSchema = new Schema({
    username: String,
    email: {
        type: String,
        validate: {
            validator: function (v) {
                return User.findOne({
                    email: v,
                    _id: {
                        $ne: this._id
                    }
                }).then((result) => {
                    if (result) {
                        throw 'email already in use'
                    }
                }).catch((err) => {
                    throw 'internal server error'
                });
                
            }
        }
    },
    password: String,
})

userSchema.pre(`save`, function (next) {
    if (this.password) {
        this.password = helpers.hashPassword(this.password)
        next()
    } else {
        next()
    }
})

var User = mongoose.model(`User`, userSchema)

module.exports = User