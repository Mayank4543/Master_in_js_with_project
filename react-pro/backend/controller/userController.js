const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");

// exports.createUser = async (req, res, next) => {
//   const user = await User.create(req.body);
//   res.status(200).json({
//     success: true,
//     user,
//   });
// };
exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "myCloud.public_id",
      url: "myCloud.secure_url",
    },
  });
  sendToken(user, 201, res);
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      throw new Error("Please enter email and password");
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      throw new Error("Invalid email or password");
    }

    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
      throw new Error("Invalid password");
    }

    sendToken(user, 200, res);
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    res.status(400).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};
// logout User
exports.logout = async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
  });
  res.status(200).json({
    success: true,
    message: "Logout successfully",
  });
};
