const mongoose = require("mongoose");

const LabSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        softwares: {
            type: Array,
            "default": [],
            required: true,
        }
    },
    {
        timestamps: true,
    }
);


const Lab = mongoose.model("Lab", LabSchema);

module.exports = Lab;
