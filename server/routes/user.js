var express = require('express');
var router = express.Router();
var userController = require(`../controllers/userController`)

/* GET users listing. */
router.post(`/`, userController.create)
router.get(`/`, userController.findAll)
router.get(`/:userId`, userController.findOne)
router.put(`/:userId`, userController.update)
router.delete(`/:userId`, userController.delete)

module.exports = router;
