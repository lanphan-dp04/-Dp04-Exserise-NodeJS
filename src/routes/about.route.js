const express = require("express");

const router = express.Router();

const aboutController = require("../app/controllers/AboutController");
const { checkAuth } = require("../util");

router.get("/api", aboutController.get);
router.get("/list",checkAuth, aboutController.show);
router.get("/trash",checkAuth, aboutController.trash);
router.post("/create",checkAuth, aboutController.create);
router.get("/:id/edit",checkAuth, aboutController.edit);
router.put("/:id",checkAuth, aboutController.update);
router.patch("/:id/restore",checkAuth, aboutController.restore);
router.delete("/:id",checkAuth, aboutController.delete);
router.delete("/:id/force",checkAuth, aboutController.forceDelete);

module.exports = router;
