var express = require('express');
var router = express.Router();
var userController = require(`../controllers/userController`)
var checkToken = require(`../middlewares/checkToken`)

/* GET users listing. */
router.post(`/`, userController.create)
router.get(`/`, checkToken.checkToken, userController.findAll)
router.get(`/:userId`, checkToken.checkToken, userController.findOne)
router.put(`/:userId`, checkToken.checkToken, userController.update)
router.delete(`/:userId`, checkToken.checkToken, userController.delete)

module.exports = router;
