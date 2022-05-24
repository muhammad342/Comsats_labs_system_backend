
const Request = require("../models/requestModel");
const asyncHandler = require("express-async-handler");


// @desc    register request
// @route   POST request/add
// @access  Private

const addRequest = asyncHandler(async (req, res) => {
    const { user, title, lab, note, type } = req.body;
    let request = await Request.create({ user, title, lab, note, type });

    if (request) {
        res.json({
            message: "request has been added",
            success: true,
        })
    } else {
        throw new Error("Request not created")
    }
});


// @desc    register request
// @route   GET  request
// @access  Private

const dcoRequests = asyncHandler(async (req, res) => {
    let requests = await Request.find({}).populate('user');
    if (requests) {
        res.json({
            message: "Successfully fetch",
            data: requests
        })
    } else {
        throw new Error("Request not created")
    }
});



// @desc    Approve Request By DCO
// @route   POST /request/approvedByDco/:_id
// @access  Private

const approvedByDco = asyncHandler(async (req, res) => {
    const { _id } = req.params;
    const request = await Request.findById(_id);
    if (request) {
        await Request.findOneAndUpdate({ _id }, { $set: { dcoApproved: true } })
        res.json({
            message: "Request has been approved",
            success: true
        })
    } else {
        res.status(404);
        throw new Error("Complaint not found");
    }
});


// @desc    Approve Request By DCO
// @route   POST /request/approvedByDco/:_id
// @access  Private

const rejectedByDco = asyncHandler(async (req, res) => {
    const { _id } = req.params;
    const request = await Request.findById(_id);
    if (request) {
        await Request.findOneAndUpdate({ _id }, { $set: { dcoApproved: false } })
        res.json({
            message: "Request has been rejected",
            success: true
        })
    } else {
        res.status(404);
        throw new Error("Request not found");
    }
});



// @desc    committee complaints
// @route   GET  request
// @access  Private

const committeeRequest = asyncHandler(async (req, res) => {
    let requests = await Request.find({ dcoApproved: true }).populate('user');
    if (requests) {
        res.json({
            message: "Successfully fetch",
            data: requests
        })
    } else {
        throw new Error("Request not created")
    }
});


// @desc    Approve Request By DCO
// @route   POST /request/approvedByDco/:_id
// @access  Private

const approvedByCommittee = asyncHandler(async (req, res) => {
    const { _id } = req.params;
    const request = await Request.findById(_id);
    if (request) {
        await Request.findOneAndUpdate({ _id }, { $set: { committeApproved: true } })
        res.json({
            message: "Request has been approved",
            success: true
        })
    } else {
        res.status(404);
        throw new Error("Complaint not found");
    }
});


// @desc    Approve Request By DCO
// @route   POST /request/approvedByDco/:_id
// @access  Private

const rejectedByCommittee = asyncHandler(async (req, res) => {
    const { _id } = req.params;
    const request = await Request.findById(_id);
    if (request) {
        await Request.findOneAndUpdate({ _id }, { $set: { committeApproved: false } })
        res.json({
            message: "Request has been rejected",
            success: true
        })
    } else {
        res.status(404);
        throw new Error("Request not found");
    }
});


// @desc    committee complaints
// @route   GET  request
// @access  Private

const nocRequests = asyncHandler(async (req, res) => {
    let requests = await Request.find({ dcoApproved: true, committeApproved: true }).populate('user');
    if (requests) {
        res.json({
            message: "Successfully fetch",
            data: requests
        })
    } else {
        throw new Error("Request not created")
    }
});


// @desc    Approve Request By DCO
// @route   POST /request/approvedByDco/:_id
// @access  Private

const approvedByNoc = asyncHandler(async (req, res) => {
    const { _id } = req.params;
    const request = await Request.findById(_id);
    if (request) {
        await Request.findOneAndUpdate({ _id }, { $set: { nocApproved: true } })
        res.json({
            message: "Request has been approved",
            success: true
        })
    } else {
        res.status(404);
        throw new Error("Complaint not found");
    }
});


// @desc    Approve Request By DCO
// @route   POST /request/approvedByDco/:_id
// @access  Private

const rejectedByNoc = asyncHandler(async (req, res) => {
    const { _id } = req.params;
    const request = await Request.findById(_id);
    if (request) {
        await Request.findOneAndUpdate({ _id }, { $set: { nocApproved: false } })
        res.json({
            message: "Request has been rejected",
            success: true
        })
    } else {
        res.status(404);
        throw new Error("Request not found");
    }
});



// @desc    All Request Approved by Noc
// @route   GET /request
// @access  Private

const allRequestAprrovedByNOC = asyncHandler(async (req, res) => {
    const requests = await Request.find({ nocApproved: true }).populate(
        'product user',
        'name lab ',
    );
    if (requests && requests.length > 0) {
        res.json(requests)
    } else {
        res.status(404);
        throw new Error("Complaints not found");
    }
});


// @desc    Request By id
// @route   POST /request/:_id
// @access  Private

const RequestById = asyncHandler(async (req, res) => {
    const { _id } = req.params;
    const request = await Request.findById(_id);
    if (request) {
        res.json({
            message: "Request has been rejected",
            success: true,
            data: request
        })
    } else {
        res.status(404);
        throw new Error("Request not found");
    }
});



// @desc    Complaint deadline
// @route   POST /complaint/deadline
// @access  Private

const RequestDeadline = asyncHandler(async (req, res) => {
    const { _id } = req.params;
    const { ApiDate } = req.body;

    const request = await Request.findById(_id);
    if (request) {
        await Request.findOneAndUpdate({ _id }, { $set: { deadline: ApiDate } })
        res.json("Deadline has been given")
    } else {
        res.status(404);
        throw new Error("Complaint not found");
    }
});



// @desc    Complaint complete By Noc
// @route   POST /complaint/mark/completed
// @access  Private

const requestCompleted = asyncHandler(async (req, res) => {
    const complaint = await Request.findById(req.params._id);
    if (complaint) {
        await Request.updateOne({ _id: req.params._id }, { $set: { status: "completed" } })
        res.json("Status has been updated as completed")
    } else {
        res.status(404);
        throw new Error("Complaint not found");
    }
});


// @desc    All Complaint Approved by Dco
// @route   GET /complaint
// @access  Private
// software complaints
const acceptedAllRequest = asyncHandler(async (req, res) => {
    const request = await Request.find({ dcoApproved: true, committeApproved: true, nocApproved: true }).populate("product user", "name lab ")
    if (request) {
        res.json({
            data: request,
            message: "SuccessFully fetched all requests"
        })
    } else {
        res.status(404);
        throw new Error("Complaint not found");
    }
});

// @desc    All Complaint Approved by Dco
// @route   GET /complaint
// @access  Private
// software complaints
const acceptedSoftwareAllRequest = asyncHandler(async (req, res) => {
    const request = await Request.find({ dcoApproved: true, committeApproved: true, nocApproved: true, type: "software" }).populate(" user", "name lab ")
    if (request) {
        res.json({
            data: request,
            message: "SuccessFully fetched all requests"
        })
    } else {
        res.status(404);
        throw new Error("Complaint not found");
    }
});

// @desc    All Complaint Approved by Dco
// @route   GET /complaint
// @access  Private
// software complaints
const acceptedHardwareAllRequest = asyncHandler(async (req, res) => {
    const request = await Request.find({ dcoApproved: true, committeApproved: true, nocApproved: true, type: "hardware" }).populate(" user", "name lab ")
    if (request) {
        res.json({
            data: request,
            message: "SuccessFully fetched all requests"
        })
    } else {
        res.status(404);
        throw new Error("Complaint not found");
    }
});



// @desc    DELETE user
// @route   DELETE /api/users/:id
// @access  Private/Admin

const deleteRequest = asyncHandler(async (req, res) => {
    const request = await Request.findById(req.params._id);
    if (request) {
        await request.remove();
        res.json({ message: "Request removed", success: true });
    } else {
        res.status(404);
        throw new Error("Request not found");
    }
});


module.exports = {
    addRequest, dcoRequests, approvedByDco, rejectedByDco, committeeRequest, approvedByCommittee, rejectedByCommittee, nocRequests, approvedByNoc, rejectedByNoc, allRequestAprrovedByNOC, RequestById, RequestDeadline, requestCompleted, acceptedAllRequest, acceptedSoftwareAllRequest, acceptedHardwareAllRequest, deleteRequest
};
