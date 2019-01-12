const User = require(`../models/User`)
const jwt = require(`jsonwebtoken`)

module.exports = {
    create: function (req, res) {

        jwt.sign({
            username: req.body.username
        }, process.env.JWT_SECRET, function (err, encoded) {
            User.create(req.body)
                .then((result) => {
                    res.status(200).json({
                        result: result,
                        jwt_token: encoded
                    })
                }).catch((err) => {
                    res.status(500).json({ msg: `internal server error`, err: err })
                });

        })
    },
    findOne: function (req, res) {
        User.findById(req.params.userId)
            .then((result) => {
                result ?
                    res.status(200).json(result) :
                    res.status(404).json({ msg: `user not found with id ${req.params.userId}` })
            }).catch((err) => {
                res.status(500).json({ msg: `internal server error`, err: err })
            });
    },
    update: function (req, res) {
        User.findOneAndUpdate({ _id: req.params.userId }, req.body)
            .then((result) => {
                result ?
                    res.status(200).json(result) :
                    res.status(404).json({ msg: `Cant update, user not found with id ${req.params.userId}` })
            }).catch((err) => {
                res.status(500).json({ msg: `internal server error`, err: err })
            });
    },
    delete: function (req, res) {
        User.deleteOne({ _id: req.params.userId })
            .then((result) => {
                result.n == 1 ?
                    res.status(200).json({
                        msg: `Success delete user with id ${req.params.userId}`,
                        result: result
                    }) :
                    res.status(404).json({
                        msg: `Cant delete, user not found with id ${req.params.userId}`
                    })
                    
            }).catch((err) => {
                        res.status(500).json({ msg: `internal server error`, err: err })
                    });
    },
    findAll: function (req, res) {
        User.find()
            .then((result) => {
                result ?
                    res.status(200).json(result) :
                    res.status(404).json({ msg: `no user found on db!` })
            }).catch((err) => {
                res.status(500).json({ msg: `internal server error`, err: err })
            });
    }
};
