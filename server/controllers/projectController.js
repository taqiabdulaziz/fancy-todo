const Project = require(`../models/Project`)

module.exports = {
    create: function (req, res) {
        Project.create(req.body)
            .then((result) => {
                result ?
                    res.status(200).json(result) :
                    res.status(400).json({ msg: `bad request` })
            }).catch((err) => {
                res.status(500).json({ msg: `internal server error`, err: err })
            });
    },
    findOne: function (req, res) {
        Project.findOne({ _id: req.params.projectId })
            .populate(`users`)
            .then((result) => {
                result ?
                    res.status(200).json(result) :
                    res.status(400).json({ msg: `Project not found with id: ${req.params.projectId}` })
            }).catch((err) => {
                res.status(500).json({ msg: `internal server error`, err: err })
            });
    },
    findAll: function (req, res) {
        req.query ?
            Project.find(req.query)
                .then((result) => {
                    result ?
                        res.status(200).json(result) :
                        res.status(400).json({ msg: `Project not found` })
                }).catch((err) => {
                    res.status(500).json({ msg: `internal server error`, err: err })
                }) :
            Project.find()
                .then((result) => {
                    result ?
                        res.status(200).json(result) :
                        res.status(400).json({ msg: `Project not found` })
                }).catch((err) => {
                    res.status(500).json({ msg: `internal server error`, err: err })
                })
    },
    update: function (req, res) {
        //TODO:
        Project.findOneAndUpdate({ _id: req.params.projectId }, req.body)
            .populate(`users`)
            .then((result) => {
                result ?
                    res.status(200).json(result) :
                    res.status(400).json({ msg: `Cant find project with id ${req.params.projectId}` })
            }).catch((err) => {
                res.status(500).json({ msg: `internal server error`, err: err })
            });
    },
    delete: function (req, res) {
        Project.deleteOne({ _id: req.params.projectId })
            .then((result) => {
                result.n == 1 ?
                    res.status(200).json({
                        msg: `Success delete project with id ${req.params.projectId}`,
                        projectId: req.params.projectId
                    }) :
                    res.status(404).json({ msg: `Cant delete project with id ${req.params.projectId}` })
            }).catch((err) => {
                res.status(500).json({msg: `internal server error`})
            });
    },
};
