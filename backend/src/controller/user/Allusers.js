const userModel = require("../../Models/userModel");

async function Allusers(req, res) {
  try {
    console.log("userId All", req.userId);
    const allusers = await userModel.find();
    res.json({
      data: allusers,
      success: true,
      error: false,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}
module.exports = Allusers;
