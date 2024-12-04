const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../../Models/userModel");

async function userSigninController(req, res) {
  try {
    const { email, password } = req.body;

    if (!email) {
      throw new Error("Please Provide Email");
    }
    if (!password) {
      throw new Error("Please Provide Password");
    }
    const user = await userModel.findOne({ email });

    if (!user) {
      throw new Error("User Not Found");
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (checkPassword) {
      const tokenData = {
        _id: user._id,
        email: user.email,
      };

      const token = jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, {
        expiresIn: 60 * 60 * 8,
      });

      const tokenOption = {
        httpOnly: true,
        secure: true,
      };

      return res.cookie("token", token, tokenOption).status(200).json({
        message: "Login successfully",
        data: token,
        success: true,
        error: false,
      });
    } else {
      throw new Error("Please Check The Password");
    }
  } catch (err) {
    console.error("Error during sign-in:", err);
    return res.status(500).json({
      message: err.message || "An error occurred",
      error: true,
      success: false,
    });
  }
}

module.exports = userSigninController;
