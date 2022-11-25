const express = require("express");

const router = express.Router();

const slideBarControllor = require("../app/controllers/SlideBarController");
const upload = require("../util/multer");
const { checkAuth } = require("../util");

router.get("/api", slideBarControllor.get);
router.get("/list",checkAuth, slideBarControllor.show);
router.get("/trash",checkAuth, slideBarControllor.trash);
router.post("/create",checkAuth, upload.single("src"), slideBarControllor.create);
router.get("/:id/edit",checkAuth, slideBarControllor.edit);
router.put("/:id",checkAuth, upload.single("src"), slideBarControllor.update);
router.patch("/:id/restore",checkAuth, slideBarControllor.restore);
router.delete("/:id",checkAuth, slideBarControllor.delete);

module.exports = router;
