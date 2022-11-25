const express = require("express");

const router = express.Router();

const sayingControllor = require("../app/controllers/SayingController");
const upload = require("../util/multer");
const { checkAuth } = require("../util");

router.get("/api", sayingControllor.get);
router.get("/list",checkAuth, sayingControllor.show);
router.get("/trash",checkAuth, sayingControllor.trash);
router.post("/create",checkAuth, upload.single("imageAvatar"), sayingControllor.create);
router.get("/:id/edit",checkAuth, sayingControllor.edit);
router.put("/:id",checkAuth, upload.single("imageAvatar"), sayingControllor.update);
router.patch("/:id/restore",checkAuth, sayingControllor.restore);
router.delete("/:id",checkAuth, sayingControllor.delete);

module.exports = router;
