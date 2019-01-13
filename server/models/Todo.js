const mongoose = require(`mongoose`)
const Schema = mongoose.Schema

var todoSchema = new Schema({
    name: String,
    description: String,
    status: String,
    dueDate: Date,
    userId: {
        type: Schema.Types.ObjectId,
        ref: `User`,
        default: null
    },
    createdAt: {
        type: Date,
        default: new Date
    }
})

var Todo = mongoose.model(`Todo`, todoSchema)

module.exports = Todo