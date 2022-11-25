const express = require("express");

const router = express.Router();

const campusControllor = require("../app/controllers/CampusControllor");
const upload = require("../util/multer");

router.get("/api", campusControllor.get);
router.get("/list", campusControllor.show);
router.post("/create",upload.single('avatar'), campusControllor.create);
router.get("/:id/edit", campusControllor.edit);
router.put("/:id",upload.single('avatar'), campusControllor.update);
router.delete("/:id", campusControllor.delete);
router.delete("/:id/force", campusControllor.forceDelete);

module.exports = router;
