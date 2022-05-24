const mongoose = require("mongoose");

const RequestSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        title: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        lab: {
            type: String,
            required: true,
        },
        note: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
            default: "progress"
        },
        dcoApproved: {
            type: Boolean,
            default: null
        },
        committeApproved: {
            type: Boolean,
            default: null
        },
        nocApproved: {
            type: Boolean,
            default: null
        },
        deadline: {
            type: Date,
        }
    },
    {
        timestamps: true,
    }
);


const Complaint = mongoose.model("Request", RequestSchema);

module.exports = Complaint;
