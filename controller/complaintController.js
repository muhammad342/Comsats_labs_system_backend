const Complaint = require("../models/complaintModel");
const asyncHandler = require("express-async-handler");

// @desc    Register Complaint
// @route   POST /complaint
// @access  Private

const registerComplaint = asyncHandler(async (req, res) => {
  const { user, title, lab, type, software, hardware, network, other } =
    req.body;
    console.log(req.body);
  const registerdComplaint = await Complaint.create({
    user,
    title,
    lab,
    type,
    software,
    hardware,
    network,
    other,
  });
  if (registerdComplaint) {
    res.json({message: "complaint has been registered", success: true});
  } else {
    res.status(400);
    throw new Error("Complaint not registered");
  }
});

// @desc    All Complaint
// @route   GET /complaint
// @access  Private

const allComplaint = asyncHandler(async (req, res) => {
  const complaints = await Complaint.find({}).populate(
    "product user lab", ""
  );
  if (complaints) {
    res.json(complaints);
  } else {
    res.status(404);
    throw new Error("Complaint not found");
  }
});




// @desc    Approve Complaint By DCO
// @route   GET /complaint/approvedByDco
// @access  Private

const approvedByDco = asyncHandler(async (req, res) => {
  const complaint = await Complaint.findById(req.body._id);
  if (complaint) {
    await Complaint.findOneAndUpdate(
      { _id: req.body._id },
      { $set: { dcoApproved: true } }
    );
    res.json("Complaint has been approved");
  } else {
    res.status(404);
    throw new Error("Complaint not found");
  }
});

// @desc    Complaint Reject By DCO
// @route   GET /complaint/approvedByDco
// @access  Private

const rejectedByDco = asyncHandler(async (req, res) => {
  const complaint = await Complaint.findById(req.body._id);
  if (complaint) {
    await Complaint.findOneAndUpdate(
      { _id: req.body._id },
      { $set: { dcoApproved: false } }
    );
    res.json("Complaint has been rejected");
  } else {
    res.status(404);
    throw new Error("Complaint not found");
  }
});

// @desc    All Complaint Approved by Dco
// @route   GET /complaint
// @access  Private

const allComplaintAprrovedByDco = asyncHandler(async (req, res) => {
  const complaints = await Complaint.find({ dcoApproved: true }).populate(
    "product user lab",
    "name lab "
  );
  if (complaints && complaints.length > 0) {
    res.json(complaints);
  } else {
    res.status(404);
    throw new Error("Complaints not found");
  }
});

// @desc    All Complaint Approved by Dco
// @route   GET /complaint
// @access  Private
// software complaints
const acceptedSoftwareComplaint = asyncHandler(async (req, res) => {
  const complaint = await Complaint.find({
    dcoApproved: true,
    committeApproved: true,
    nocApproved: true,
  }).populate("product user", "name lab ");

  if (complaint) {
    res.json({
      data: complaint,
      message: "SuccessFully fetched all software complaints",
    });
  } else {
    res.status(404);
    throw new Error("Complaint not found");
  }
});

// @desc    DELETE user
// @route   DELETE /api/users/:id
// @access  Private/Admin

const deleteComplaint = asyncHandler(async (req, res) => {
  const complaint = await Complaint.findById(req.params._id);
  if (complaint) {
    await complaint.remove();
    res.json({ message: "Complaint removed", success: true });
  } else {
    res.status(404);
    throw new Error("Complaint not found");
  }
});

// @desc    All Complaint Approved by Dco
// @route   GET /complaint
// @access  Private
// hardware complaints
const acceptedhardwareComplaint = asyncHandler(async (req, res) => {
  const complaint = await Complaint.find({
    dcoApproved: true,
    committeApproved: true,
    worksApproved: true,
  }).populate("product user", "name lab ");

  if (complaint) {
    res.json({
      data: complaint,
      message: "SuccessFully fetched all hardware complaints",
    });
  } else {
    res.status(404);
    throw new Error("Complaint not found");
  }
});

// @desc    All Complaint Approved by Dco
// @route   GET /complaint
// @access  Private
// hardware complaints
const allhardwareComplaint = asyncHandler(async (req, res) => {
  const complaint = await Complaint.find({ type: "hardware" }).populate(
    "product user",
    "name lab "
  );

  if (complaint) {
    res.json({
      data: complaint,
      message: "SuccessFully fetched all hardware complaints",
    });
  } else {
    res.status(404);
    throw new Error("Complaint not found");
  }
});

// @desc    All Complaint Approved by Dco
// @route   GET /complaint
// @access  Private
// hardware complaints
const allSoftwareComplaint = asyncHandler(async (req, res) => {
  const complaint = await Complaint.find({ type: "software" }).populate(
    "product user",
    "name lab "
  );

  if (complaint) {
    res.json({
      data: complaint,
      message: "SuccessFully fetched all hardware complaints",
    });
  } else {
    res.status(404);
    throw new Error("Complaint not found");
  }
});

// @desc    Complaint approve By committee
// @route   POST /complaint/approvedByCommittee
// @access  Private

const approveByCommittee = asyncHandler(async (req, res) => {
  const complaint = await Complaint.findById(req.body._id);
  if (complaint) {
    await Complaint.findOneAndUpdate(
      { _id: req.body._id },
      { $set: { committeApproved: true } }
    );
    res.json("Complaint has been approved");
  } else {
    res.status(404);
    throw new Error("Complaint not found");
  }
});

// @desc    Complaint reject By committee
// @route   POST /complaint/rejectByCommittee
// @access  Private

const rejectByCommittee = asyncHandler(async (req, res) => {
  const complaint = await Complaint.findById(req.body._id);
  if (complaint) {
    await Complaint.findOneAndUpdate(
      { _id: req.body._id },
      { $set: { committeApproved: false } }
    );
    res.json("Complaint has been rejected");
  } else {
    res.status(404);
    throw new Error("Complaint not found");
  }
});

// @desc    All Complaint Approved by Dco
// @route   GET /complaint
// @access  Private

const allComplaintAprrovedByCommittee = asyncHandler(async (req, res) => {
  const complaints = await Complaint.find({
    committeApproved: true,
    dcoApproved: true,
    type: { $in: [ "software", "network", "other" ] } 
  }).populate("product user lab", "name lab ");
 

  if (complaints && complaints.length > 0) {
    res.json(complaints);
  } else {
    res.status(404);
    throw new Error("Complaints not found");
  }
});

// @desc    All Complaint Approved by Dco
// @route   GET /complaint
// @access  Private

const allHardwareComplaintAprrovedByCommittee = asyncHandler(
  async (req, res) => {
    const complaints = await Complaint.find({
      committeApproved: true,
      dcoApproved: true,
      type: "hardware",
    }).populate("product hardware.product user lab", "name lab ");
    if (complaints && complaints.length > 0) {
      res.json(complaints);
    } else {
      res.status(404);
      throw new Error("Complaints not found");
    }
  }
);

// @desc    Complaint approve By works
// @route   POST /complaint/approvedByworks
// @access  Private

const approveByWorks = asyncHandler(async (req, res) => {
  const complaint = await Complaint.findById(req.body._id);
  if (complaint) {
    await Complaint.findOneAndUpdate(
      { _id: req.body._id },
      { $set: { worksApproved: true } }
    );
    res.json("Complaint has been approved");
  } else {
    res.status(404);
    throw new Error("Complaint not found");
  }
});

// @desc    Complaint reject By works
// @route   POST /complaint/rejectByworks
// @access  Private

const rejectByWorks = asyncHandler(async (req, res) => {
  const complaint = await Complaint.findById(req.body._id);
  if (complaint) {
    await Complaint.findOneAndUpdate(
      { _id: req.body._id },
      { $set: { worksApproved: false } }
    );
    res.json("Complaint has been rejected");
  } else {
    res.status(404);
    throw new Error("Complaint not found");
  }
});

// @desc    Complaint approve By Noc
// @route   POST /complaint/approvedByNoc
// @access  Private

const approveByNoc = asyncHandler(async (req, res) => {
  const complaint = await Complaint.findById(req.body._id);
  if (complaint) {
    await Complaint.findOneAndUpdate(
      { _id: req.body._id },
      { $set: { nocApproved: true } }
    );
    res.json("Complaint has been approved");
  } else {
    res.status(404);
    throw new Error("Complaint not found");
  }
});

// @desc    Complaint reject By committee
// @route   POST /complaint/rejectByNoc
// @access  Private

const rejectByNoc = asyncHandler(async (req, res) => {
  const complaint = await Complaint.findById(req.body._id);
  if (complaint) {
    await Complaint.findOneAndUpdate(
      { _id: req.body._id },
      { $set: { nocApproved: false } }
    );
    res.json("Complaint has been rejected");
  } else {
    res.status(404);
    throw new Error("Complaint not found");
  }
});

// @desc    Complaint complete By Noc
// @route   POST /complaint/mark/completed
// @access  Private

const complaintCompleted = asyncHandler(async (req, res) => {
  const complaint = await Complaint.findById(req.params._id);
  if (complaint) {
    await Complaint.updateOne(
      { _id: req.params._id },
      { $set: { status: "completed" } }
    );
    res.json("Status has been updated as completed");
  } else {
    res.status(404);
    throw new Error("Complaint not found");
  }
});

// @desc    All Complaint Approved by Dco
// @route   GET /complaint
// @access  Private

const allComplaintAprrovedByNOC = asyncHandler(async (req, res) => {
  const complaints = await Complaint.find({
    nocApproved: true,
    type: { $in: [ "software", "network", "other" ] } 
  }).populate("product user lab", "name lab ");
  if (complaints && complaints.length > 0) {
    res.json(complaints);
  } else {
    res.status(404);
    throw new Error("Complaints not found");
  }
});

// @desc    All Complaint Approved by Dco
// @route   GET /complaint/approvedByWorks
// @access  Private

const allComplaintAprrovedByWorks = asyncHandler(async (req, res) => {
  const complaints = await Complaint.find({
    worksApproved: true,
    type: "hardware",
  }).populate("product user lab hardware.product");
  if (complaints && complaints.length > 0) {
    res.json(complaints);
  } else {
    res.status(404);
    throw new Error("Complaints not found");
  }
});

// @desc    Complaint reject By committee
// @route   POST /complaint/rejectByNoc
// @access  Private

const complaintById = asyncHandler(async (req, res) => {
  const { _id } = req.params;
  const complaint = await Complaint.findById(_id).populate(
    "user product network.lab hardware.lab hardware.product lab",
    "-password"
  );
  if (complaint) {
    res.json(complaint);
  } else {
    res.status(404);
    throw new Error("Complaint not found");
  }
});

// @desc    Complaint deadline
// @route   POST /complaint/deadline
// @access  Private

const complaintDeadline = asyncHandler(async (req, res) => {
  const { _id } = req.params;
  const { ApiDate } = req.body;

  const complaint = await Complaint.findById(_id);
  if (complaint) {
    await Complaint.findOneAndUpdate({ _id }, { $set: { deadline: ApiDate } });
    res.json("Deadline has been given");
  } else {
    res.status(404);
    throw new Error("Complaint not found");
  }
});

module.exports = {
  registerComplaint,
  allComplaint,
  approvedByDco,
  allComplaintAprrovedByDco,
  rejectedByDco,
  approveByCommittee,
  rejectByCommittee,
  allComplaintAprrovedByCommittee,
  approveByNoc,
  allComplaintAprrovedByNOC,
  rejectByNoc,
  complaintById,
  complaintDeadline,
  allHardwareComplaintAprrovedByCommittee,
  approveByWorks,
  rejectByWorks,
  allComplaintAprrovedByWorks,
  complaintCompleted,
  acceptedSoftwareComplaint,
  acceptedhardwareComplaint,
  allhardwareComplaint,
  allSoftwareComplaint,
  deleteComplaint,
};
