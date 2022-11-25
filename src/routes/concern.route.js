const express = require("express");

const router = express.Router();

const concernControllor = require("../app/controllers/ConcernController");
const { checkAuth } = require("../util");

router.get("/api/", concernControllor.get);
router.get("/list", checkAuth, concernControllor.show);
router.get("/trash", checkAuth, concernControllor.trash);
router.post("/create", concernControllor.create);
router.get("/:id/edit", concernControllor.edit);
router.put("/:id", concernControllor.update);
router.patch("/:id/restore", concernControllor.restore);
router.delete("/:id", concernControllor.delete);
router.delete("/:id/force", concernControllor.forceDelete);

module.exports = router;
