const mongoose = require(`mongoose`)
const Schema = mongoose.Schema

var projectSchema = new Schema({
    name: String,
    users: [{
        type: Schema.Types.ObjectId,
        ref: `User`
    }],
    todos: [{
        type: Schema.Types.ObjectId,
        ref: `Todo`
    }],
    createdAt: Date,
    admin: {
        type: Schema.Types.ObjectId,
        ref: `User`
    }
})

var Project = mongoose.model(`Project`, projectSchema)
module.exports = Project
