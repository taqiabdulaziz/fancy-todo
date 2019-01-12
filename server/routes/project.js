var express = require('express');
var router = express.Router();
var projectController = require(`../controllers/projectController`)

router.post(`/`, projectController.create)
router.get(`/:projectId`, projectController.findOne)
router.get(`/`, projectController.findAll)
router.put(`/:projectId`, projectController.update)
router.delete(`/:projectId`, projectController.delete)

module.exports = router