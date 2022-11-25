const express = require("express");

const router = express.Router();

const sayingControllor = require("../app/controllers/SayingController");
const upload = require("../util/multer");

router.get("/api", sayingControllor.get);
router.get("/list", sayingControllor.show);
router.get("/trash", sayingControllor.trash);
router.post("/create", upload.single("imageAvatar"), sayingControllor.create);
router.get("/:id/edit", sayingControllor.edit);
router.put("/:id", upload.single("imageAvatar"), sayingControllor.update);
router.patch("/:id/restore", sayingControllor.restore);
router.delete("/:id", sayingControllor.delete);

module.exports = router;
