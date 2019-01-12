var express = require('express');
var router = express.Router();
var todoController = require(`../controllers/todoController`)

// MARK: Reset
router.post(`/:userId`, todoController.create)
router.get(`/`, todoController.findAll)
router.get(`/:todoId`, todoController.findOne)
router.put(`/:todoId`, todoController.update)
router.delete(`/:todoId`, todoController.delete)

module.exports = router