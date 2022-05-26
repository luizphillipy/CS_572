const express = require("express");
const router = express.Router();
const operationController = require("../../controllers/multiplyController");
router.route("/multiply/:numberOne")
.get(operationController.mutiply);

module.exports=router;