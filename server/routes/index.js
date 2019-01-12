var express = require('express');
var router = express.Router();
var usersRouter = require(`./user`)
var projectRouter = require(`./project`)
var todoRouter = require(`./todo`)
var authenticationController = require(`../controllers/authenticationController`)
var checkToken = require(`../middlewares/checkToken`)

/* GET home page. */
router.use(`/user`, checkToken.checkToken, usersRouter)
router.use(`/project`, checkToken.checkToken, projectRouter)
router.use(`/todo`, checkToken.checkToken, todoRouter)

//AUTHENTICATION
router.post(`/google`, authenticationController.google)

module.exports = router;
