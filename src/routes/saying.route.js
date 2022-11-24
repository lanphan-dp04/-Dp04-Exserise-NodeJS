const express = require("express");

const router = express.Router();

const sayingControllor = require("../app/controllers/SayingController");

router.get("/api", sayingControllor.get);
router.get("/list", sayingControllor.show);
router.post("/create", sayingControllor.create);
router.get("/:id/edit", sayingControllor.edit);
router.put("/:id", sayingControllor.update);
router.delete("/:id", sayingControllor.delete);

module.exports = router;
