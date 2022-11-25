const express = require("express");

const router = express.Router();

const campusControllor = require("../app/controllers/CampusControllor");

router.get("/api", campusControllor.get);
router.get("/list", campusControllor.show);
router.get("/trash", campusControllor.trash);
router.post("/create", campusControllor.create);
router.get("/:id/edit", campusControllor.edit);
router.put("/:id", campusControllor.update);
router.patch("/:id/restore", campusControllor.restore);
router.delete("/:id", campusControllor.delete);
router.delete("/:id/force", campusControllor.forceDelete);

module.exports = router;
