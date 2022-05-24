const express = require("express");
const router = express.Router();

const complaintController = require("../controller/complaintController");
const authMiddleware = require("../middleware/authMiddleware");

router.route("/").post(authMiddleware.protect, authMiddleware.labStaff, complaintController.registerComplaint).get(authMiddleware.protect, complaintController.allComplaint);
router.post("/approvedByDco", authMiddleware.protect, complaintController.approvedByDco);
router.get("/approvedByWorks", authMiddleware.protect, complaintController.allComplaintAprrovedByWorks);
router.post("/rejectedByDco", authMiddleware.protect, complaintController.rejectedByDco);
router.post("/approvedByCommittee", authMiddleware.protect, complaintController.approveByCommittee);
router.post("/approveByWorks", authMiddleware.protect, complaintController.approveByWorks)
router.post("/rejectByworks", authMiddleware.protect, complaintController.rejectByWorks)
router.get("/approvedByCommitte/hardware", authMiddleware.protect, complaintController.allHardwareComplaintAprrovedByCommittee);
router.post("/rejectedByComittee", authMiddleware.protect, complaintController.rejectByCommittee);
router.route("/committee").get(authMiddleware.protect, complaintController.allComplaintAprrovedByDco);
router.route("/noc").get(authMiddleware.protect, complaintController.allComplaintAprrovedByCommittee).post(authMiddleware.protect, complaintController.approveByNoc);
router.post("/rejectedByNoc", authMiddleware.protect, complaintController.rejectByNoc);
router.get("/allComplaintAprrovedByNOC", authMiddleware.protect, complaintController.allComplaintAprrovedByNOC)
router.get("/:_id", authMiddleware.protect, complaintController.complaintById);
router.post("/deadline/:_id", complaintController.complaintDeadline)
router.post("/mark/completed/:_id", complaintController.complaintCompleted)
router.route("/accepted/by/all").get(complaintController.acceptedSoftwareComplaint);
router.route("/accepted/hardware").get(complaintController.acceptedhardwareComplaint);
router.route("/all/hardware").get(complaintController.allhardwareComplaint);
router.route("/all/software").get(complaintController.allSoftwareComplaint);
router.delete("/delete/:_id", complaintController.deleteComplaint);
const complaintRoutes = router;
module.exports = complaintRoutes;


