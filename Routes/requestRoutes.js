const express = require("express");
const router = express.Router();

const requestController = require("../controller/requestController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/add", authMiddleware.protect, requestController.addRequest)
router.get("/", authMiddleware.protect, requestController.dcoRequests)
router.get("/dcoApproved/:_id", authMiddleware.protect, requestController.approvedByDco)
router.get("/dcoRejected/:_id", authMiddleware.protect, requestController.rejectedByDco)
router.get("/committee", authMiddleware.protect, requestController.committeeRequest)
router.get("/committeeApproved/:_id", authMiddleware.protect, requestController.approvedByCommittee)
router.get("/committeeRejected/:_id", authMiddleware.protect, requestController.rejectedByCommittee)
router.get("/noc", authMiddleware.protect, requestController.nocRequests)
router.get("/nocApproved/:_id", authMiddleware.protect, requestController.approvedByNoc)
router.get("/nocRejected/:_id", authMiddleware.protect, requestController.rejectedByNoc)
router.get("/approved/noc", authMiddleware.protect, requestController.allRequestAprrovedByNOC)
router.get("/:_id", authMiddleware.protect, requestController.allRequestAprrovedByNOC)
router.post("/deadline/:_id", requestController.RequestDeadline)
router.post("/mark/completed/:_id", requestController.requestCompleted)
router.route("/accepted/by/all").get(requestController.acceptedAllRequest);
router.route("/accepted/software/all").get(requestController.acceptedSoftwareAllRequest);
router.route("/accepted/hardware/all").get(requestController.acceptedHardwareAllRequest);
router.delete("/delete/:_id", requestController.deleteRequest)

const requestRoutes = router;
module.exports = requestRoutes;
