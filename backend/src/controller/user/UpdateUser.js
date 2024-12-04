const userModel = require("../../Models/userModel");

async function UpdateUser(req, res) {
  try {
    const sessionUsern = req.userId;
    const { userId, name, email, role } = req.body;

    const Payload = {
      ...(name && { name: name }),
      ...(email && { email: email }),
      ...(role && { role: role }),
    };

    const updateUser = await userModel.findByIdAndUpdate(userId, Payload);

    const user = await userModel.findById(sessionUsern);

    res.json({
      data: updateUser,
      message: "User updated",
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
module.exports = UpdateUser;
