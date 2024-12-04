const userModel = require("../../Models/userModel");

async function UserDetailsController(req, res) {
  try {
    const user = await userModel.findById(req.userId);

    res.status(200).json({
      data: user,
      error: false,
      success: true,
      message: "User Details",
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}
module.exports = UserDetailsController;
