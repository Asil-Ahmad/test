const userModel = require("../../Models/userModel");
const bcrypt = require("bcrypt");

async function UserSignupController(req, res) {
  try {
    const { name, email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (user) {
      throw new Error("Allready user exists");
    }

    if (!name) {
      throw new Error("Please provid name ");
    }
    if (!email) {
      throw new Error("Please provide email");
    }
    if (!password) {
      throw new Error("Please provide password");
    }
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    if (!hashPassword) {
      throw new Element("Somting is wrong");
    }
    const payload = {
      ...req.body,
      role: "GENERAL",
      password: hashPassword,
    };

    const userData = new userModel(payload);
    const saveUser = await userData.save();

    res.status(201).json({
      data: saveUser,
      success: true,
      error: false,
      message: "User Created Successfully!",
    });
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}
module.exports = UserSignupController;
