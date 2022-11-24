const express = require("express");

const router = express.Router();

const aboutControllor = require("../app/controllers/AboutController");

router.get("/api", aboutControllor.get);
router.get("/list", aboutControllor.show);
router.post("/create", aboutControllor.create);
router.get("/:id/edit", aboutControllor.edit);
router.put("/:id", aboutControllor.update);
router.delete("/:id", aboutControllor.delete);

module.exports = router;
