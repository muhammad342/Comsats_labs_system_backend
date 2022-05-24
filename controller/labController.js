const Lab = require("../models/labModal");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");

// @desc    auth user
// @route   POST user/login
// @access  Public

const AddLab = asyncHandler(async (req, res) => {
  const { name, softwares} = req.body;
  const createdLab = await Lab.create({name,softwares})
  if(createdLab)
  {
    res.json({
        message: "Successfully Created",
        data: createdLab,
        success: true,
    })

  }
  else {
      throw new Error("Lab not created");
  }
});


const AllLab = asyncHandler(async (req, res) => {
    const allLabs = await Lab.find({});
    if(allLabs)
    {
      res.json(
         
           allLabs,
      
      )
    }
    else {
        throw new Error("Lab not created");
    }
    
  });

module.exports = {
    AddLab,
    AllLab
};
