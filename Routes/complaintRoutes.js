const express = require("express");
const router = express.Router();

const complaintController = require("../controller/complaintController");
const authMiddleware = require("../middleware/authMiddleware");

router.route("/").post(authMiddleware.protect, authMiddleware.labStaff, complaintController.registerComplaint).get(authMiddleware.protect, complaintController.allComplaint);
router.get("/completedComplaint",authMiddleware.protect, complaintController.allCompletedComplaint);
router.get("/ProgressComplaint",authMiddleware.protect, complaintController.allInProgressComplaint);
router.get("/rejectedComplaint",authMiddleware.protect, complaintController.allRejectedComplaint);
router.post("/approvedByDco", authMiddleware.protect, complaintController.approvedByDco);
router.get("/approvedByWorks", authMiddleware.protect, complaintController.allComplaintAprrovedByWorks);
router.post("/rejectedByDco", authMiddleware.protect, complaintController.rejectedByDco);
router.post("/approvedByCommittee", authMiddleware.protect, complaintController.approveByCommittee);
router.post("/approveByWorks", authMiddleware.protect, complaintController.approveByWorks)
router.post("/rejectByworks", authMiddleware.protect, complaintController.rejectByWorks)
router.get("/approvedByCommitte/hardware", authMiddleware.protect, complaintController.allHardwareComplaintAprrovedByCommittee);
router.post("/rejectedByComittee", authMiddleware.protect, complaintController.rejectByCommittee);
router.route("/committee").get(authMiddleware.protect, complaintController.allComplaintAprrovedByDco);
router.route("/allApprovedByDco").get(authMiddleware.protect, complaintController.allComplaintAprrovedByDcoReport);
router.route("/allRejectedByDco").get(authMiddleware.protect, complaintController.allComplaintRejectedByDco);
router.route("/allComplaintApprovedByCommittee").get(authMiddleware.protect, complaintController.allComplaintAprrovedByCommitteeReport)
router.route("/allComplaintRejectedByCommittee").get(authMiddleware.protect, complaintController.allComplaintRejectedByCommitteeReport)
router.route("/allComplaintApprovedByWorks").get(authMiddleware.protect, complaintController.allComplaintAprrovedByWorksReport)
router.route("/allComplaintRejectedByWorks").get(authMiddleware.protect, complaintController.allComplaintRejectedByWorksReport)
router.route("/allComplaintApprovedByNOC").get(authMiddleware.protect, complaintController.allComplaintAprrovedByNOCReport)
router.route("/allComplaintRejectedByNOC").get(authMiddleware.protect, complaintController.allComplaintRejectedByNOCReport)
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


