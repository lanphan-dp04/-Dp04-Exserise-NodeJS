const express = require("express");

const router = express.Router();

const campusControllor = require("../app/controllers/CampusControllor");

router.get("/api", campusControllor.get);
router.get("/list", campusControllor.show);
router.post("/create", campusControllor.create);
router.get("/:id/edit", campusControllor.edit);
router.put("/:id", campusControllor.update);
router.delete("/:id", campusControllor.delete);

module.exports = router;
