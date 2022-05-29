const mongoose = require("mongoose");

const RequestSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        name: {
            type: String,
            required: true,
        },
        courseCode: {
            type: String,
            required: true,
        },
        courseTitle: {
            type: String,
            required: true,
        },
        numberOfStudent: {
            type: Number,
            required: true,
        }, 
        lab: {
            type: String,
            required: true,
        },
        type:{
            type:String,
            required:true,
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


const FacultyRequest = mongoose.model("FacultyRequest", RequestSchema);

module.exports = FacultyRequest;
