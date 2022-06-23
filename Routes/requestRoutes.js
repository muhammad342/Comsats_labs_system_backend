const express = require("express");
const router = express.Router();

const requestController = require("../controller/requestController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/add", authMiddleware.protect, requestController.addRequest);
router.get(
  "/allCompletedRequest",
  authMiddleware.protect,
  requestController.allCompletedRequest
);
router.get(
  "/allInProgressRequests",
  authMiddleware.protect,
  requestController.allInProgressRequests
);
router.get(
  "/allRejectedRequest",
  authMiddleware.protect,
  requestController.allRejectedRequest
);
router.get(
  "/allRequestAprrovedByDco",
  authMiddleware.protect,
  requestController.allRequestAprrovedByDco
);
router.get(
  "/allRequestRejectedByDcoReport",
  authMiddleware.protect,
  requestController.allRequestRejectedByDcoReport
);
router.get(
  "/allRequestAprrovedByCommitteeReport",
  authMiddleware.protect,
  requestController.allRequestAprrovedByCommitteeReport
);
router.get(
  "/allRequestRejectedByCommitteeReport",
  authMiddleware.protect,
  requestController.allRequestRejectedByCommitteeReport
);
router.get(
  "/allRequestAprrovedByWorksReport",
  authMiddleware.protect,
  requestController.allRequestAprrovedByWorksReport
);
router.get(
  "/allRequestRejectedByNOCReport",
  authMiddleware.protect,
  requestController.allRequestRejectedByNOCReport
);
router.get(
  "/allRequestAprrovedByNOCReport",
  authMiddleware.protect,
  requestController.allRequestAprrovedByNOCReport
);

router.post(
  "/addFacultyRequest",
  authMiddleware.protect,
  requestController.addFacultyRequest
);
router.get(
  "/getFacultyRequest",
  authMiddleware.protect,
  requestController.getFacultyRequests
);
router.get("/", authMiddleware.protect, requestController.dcoRequests);
router.get(
  "/dcoApproved/:_id",
  authMiddleware.protect,
  requestController.approvedByDco
);
router.get(
  "/dcoRejected/:_id",
  authMiddleware.protect,
  requestController.rejectedByDco
);
router.get(
  "/committee",
  authMiddleware.protect,
  requestController.committeeRequest
);
router.get(
  "/committeeApproved/:_id",
  authMiddleware.protect,
  requestController.approvedByCommittee
);
router.get(
  "/committeeRejected/:_id",
  authMiddleware.protect,
  requestController.rejectedByCommittee
);
router.get("/noc", authMiddleware.protect, requestController.nocRequests);
router.get(
  "/nocApproved/:_id",
  authMiddleware.protect,
  requestController.approvedByNoc
);
router.get(
  "/nocRejected/:_id",
  authMiddleware.protect,
  requestController.rejectedByNoc
);
router.get(
  "/approved/noc",
  authMiddleware.protect,
  requestController.allRequestAprrovedByNOC
);
router.get(
  "/:_id",
  authMiddleware.protect,
  requestController.allRequestAprrovedByNOC
);
router.post("/deadline/:_id", requestController.RequestDeadline);
router.post("/mark/completed/:_id", requestController.requestCompleted);
router.route("/accepted/by/all").get(requestController.acceptedAllRequest);
router
  .route("/accepted/software/all")
  .get(requestController.acceptedSoftwareAllRequest);
router
  .route("/accepted/hardware/all")
  .get(requestController.acceptedHardwareAllRequest);
router.delete("/delete/:_id", requestController.deleteRequest);

const requestRoutes = router;
module.exports = requestRoutes;
