const Todo = require(`../models/Todo`)

module.exports = {
    create: function (req, res) {
        Todo.create({
            name: req.body.name,
            description: req.body.description,
            status: req.body.status,
            dueDate: req.body.dueDate,
            userId: req.params.userId
        })
            .then((result) => {
                result ?
                    res.status(200).json(result) :
                    res.status(400).json({ msg: `error`, err: result })
            }).catch((err) => {
                res.status(500).json({ msg: `internal server error`, err: err })
            });
    },
    findAll: function (req, res) {
        console.log(req.headers, `woiii`);
        
        Todo.find({
            userId: req.headers.userid
        })
            .then((result) => {
                result ?
                    res.status(200).json(result) :
                    res.status(400).json({ msg: `Todo not found` })
            }).catch((err) => {
                res.status(500).json({ msg: `internal server error`, err: err })
            });
    },
    findOne: function (req, res) {
        Todo.findById({ _id: req.params.todoId })
            .then((result) => {
                result ?
                    res.status(200).json(result) :
                    res.status(400).json({ msg: `Todo not found with id ${req.params.todoId}` })
            }).catch((err) => {
                res.status(500).json({ msg: `internal server error`, err: err })
            });
    },
    update: function (req, res) {
        console.log(req.body);
        
        Todo.findByIdAndUpdate({ _id: req.params.todoId }, req.body)
            .then((result) => {
                result ?
                    res.status(200).json(result) :
                    res.status(400).json({ msg: `Cant update, todo with id ${req.params.todoId} not found` })
            }).catch((err) => {
                res.status(500).json({ msg: `internal server error`, err: err })
            });
    },
    delete: function (req, res) {
        Todo.deleteOne({ _id: req.params.todoId })
            .then((result) => {
                result.n == 1 ?
                    res.status(200).json({ msg: `Success delete todo`, todoId: req.params.todoId }) :
                    res.status(400).json({ msg: `Cant delete, todo with id ${req.params.todoId} not found` })
            }).catch((err) => {
                res.status(500).json({ msg: `internal server error`, err: err })
            });
    }
};
