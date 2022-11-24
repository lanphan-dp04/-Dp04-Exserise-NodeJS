const express = require("express");

const router = express.Router();

const aboutController = require("../app/controllers/AboutController");

router.get("/api", aboutController.get);
router.get("/list", aboutController.show);
router.post("/create", aboutController.create);
router.get("/:id/edit", aboutController.edit);
router.put("/:id", aboutController.update);
router.delete("/:id", aboutController.delete);

module.exports = router;
