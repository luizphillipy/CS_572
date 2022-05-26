const express = require("express");
const router = express.Router();
const studentController = require("../../controllers/studentController");


router.route("/students").get(studentController.getAll);

router.route("/students/:studentPosition").get(studentController.getById);

module.exports=router;