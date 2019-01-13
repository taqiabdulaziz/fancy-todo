var express = require('express');
var router = express.Router();
var usersRouter = require(`./user`)
var projectRouter = require(`./project`)
var todoRouter = require(`./todo`)
var authenticationController = require(`../controllers/authenticationController`)
var checkToken = require(`../middlewares/checkToken`)
var userController = require(`../controllers/userController`)

/* GET home page. */
router.use(`/user`, usersRouter)
router.use(`/project`, checkToken.checkToken, projectRouter)
router.use(`/todo`, checkToken.checkToken, todoRouter)
router.post(`/login`, userController.login)
//AUTHENTICATION
router.post(`/google`, authenticationController.google)

module.exports = router;
