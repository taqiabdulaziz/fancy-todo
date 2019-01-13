const mongoose = require(`mongoose`)
const Schema = mongoose.Schema
let helpers = require(`../helpers/helpers`)

var userSchema = new Schema({
    username: String,
    email: String,
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