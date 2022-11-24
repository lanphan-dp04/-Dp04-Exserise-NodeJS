const express = require("express");

const router = express.Router();

const admissionControllor = require("../app/controllers/AdmissionControllor");

router.get("/api", admissionControllor.get);
router.get("/list", admissionControllor.show);
router.post("/create", admissionControllor.create);
router.get("/:id/edit", admissionControllor.edit);
router.put("/:id", admissionControllor.update);
router.delete("/:id", admissionControllor.delete);

module.exports = router;
