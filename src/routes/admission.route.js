const express = require("express");

const router = express.Router();

const admissionControllor = require("../app/controllers/AdmissionControllor");
const upload = require("../util/multer");
const { checkAuth } = require("../util");
const uploadCloud = require("../util/cloudinary");

router.get("/api", admissionControllor.get);
router.get("/list",checkAuth, admissionControllor.show);
router.post("/create",checkAuth, admissionControllor.create);
router.get("/:id/edit",checkAuth, admissionControllor.edit);
router.put("/:id",checkAuth,uploadCloud.single('avatar'), admissionControllor.update);
router.delete("/:id",checkAuth, admissionControllor.delete);

module.exports = router;
