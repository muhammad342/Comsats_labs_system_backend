const mongoose = require("mongoose");

const complaintSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    lab: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Lab",
    },
    type: {
      type: String,
      required: true,
    },
    hardware: {
      component: {},
      lab: { type: mongoose.Schema.Types.ObjectId, ref: "Lab" },
      note: { type: String },
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    },

    software: {
      softwares: {},
      lab: { type: mongoose.Schema.Types.ObjectId, ref: "Lab" },
      note: { type: String },
      type: { type: String },
    },
    network: {
      lab: { type: mongoose.Schema.Types.ObjectId, ref: "Lab" },
      note: { type: String },
      type: { type: String },
    },
    other: {
      lab: { type: mongoose.Schema.Types.ObjectId, ref: "Lab" },
      note: { type: String },
      type: { type: String },
    },
    status: {
      type: String,
      required: true,
      default: "progress",
    },
    dcoApproved: {
      type: Boolean,

      default: null,
    },
    committeApproved: {
      type: Boolean,

      default: null,
    },
    nocApproved: {
      type: Boolean,

      default: null,
    },
    worksApproved: {
      type: Boolean,

      default: null,
    },

    deadline: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Complaint = mongoose.model("Complaint", complaintSchema);

module.exports = Complaint;
