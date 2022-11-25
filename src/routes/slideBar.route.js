const express = require("express");

const router = express.Router();

const slideBarControllor = require("../app/controllers/SlideBarController");
const upload = require("../util/multer");

router.get("/api", slideBarControllor.get);
router.get("/list", slideBarControllor.show);
router.get("/trash", slideBarControllor.trash);
router.post("/create", upload.single("src"), slideBarControllor.create);
router.get("/:id/edit", slideBarControllor.edit);
router.put("/:id", upload.single("src"), slideBarControllor.update);
router.patch("/:id/restore", slideBarControllor.restore);
router.delete("/:id", slideBarControllor.delete);
router.delete("/:id/force", slideBarControllor.forceDelete);
module.exports = router;
