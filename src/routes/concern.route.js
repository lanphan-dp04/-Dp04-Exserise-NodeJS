const express = require("express");

const router = express.Router();

const concernControllor = require("../app/controllers/ConcernController");
const { checkAuth } = require("../util");

router.get("/api/", concernControllor.get);
router.get("/list",checkAuth, checkAuth, concernControllor.show);
router.get("/trash", checkAuth, concernControllor.trash);
router.post("/create",checkAuth, concernControllor.create);
router.get("/:id/edit",checkAuth, concernControllor.edit);
router.put("/:id",checkAuth, concernControllor.update);
router.patch("/:id/restore",checkAuth, concernControllor.restore);
router.delete("/:id",checkAuth, concernControllor.delete);

module.exports = router;
