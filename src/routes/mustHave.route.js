const express = require("express");

const router = express.Router();

const mustHaveControllor = require("../app/controllers/MustHaveController");
const upload = require("../util/multer");
const { checkAuth } = require("../util");
const uploadCloud = require("../util/cloudinary");

router.get("/api", mustHaveControllor.get);
router.get("/list",checkAuth, mustHaveControllor.show);
router.get("/trash",checkAuth, mustHaveControllor.trash);
router.post("/create",checkAuth, uploadCloud.single("icon"), mustHaveControllor.create);
router.get("/:id/edit",checkAuth, mustHaveControllor.edit);
router.put("/:id",checkAuth, uploadCloud.single("icon"), mustHaveControllor.update);
router.patch("/:id/restore",checkAuth, mustHaveControllor.restore);
router.delete("/:id",checkAuth, mustHaveControllor.delete);

module.exports = router;
