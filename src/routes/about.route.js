const express = require("express");

const router = express.Router();

const aboutController = require("../app/controllers/AboutController");

router.get("/api", aboutController.get);
router.get("/list", aboutController.show);
router.get("/trash", aboutController.trash);
router.post("/create", aboutController.create);
router.get("/:id/edit", aboutController.edit);
router.put("/:id", aboutController.update);
router.patch("/:id/restore", aboutController.restore);
router.delete("/:id", aboutController.delete);
router.delete("/:id/force", aboutController.forceDelete);

module.exports = router;
