const express = require("express");
const router = express.Router();

const labController = require("../controller/labController");
const authMiddleware = require("../middleware/authMiddleware");

router.route("/").post( labController.AddLab).get(labController.AllLab);
router.route("/allLab").get( labController.AllLab).get(labController.AllLab);

const labRoutes = router;
module.exports = labRoutes;


