const express = require("express");
const router = express.Router();
const controller = require("../controllers/cate.controller");
const verify = require("../supports/verifyToken");

// Create new
router.post("/", verify, controller.createNew);

// Update by id
router.put("/:id", verify, controller.updateById);

// Get by id
router.get("/:id", verify, controller.getById);

// Get all
router.get("/", verify, controller.getAll);

// Delete by id
router.delete("/:id", verify, controller.delete);

module.exports = router;
