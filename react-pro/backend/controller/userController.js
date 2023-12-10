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
      return new Error("Please enter email and password");
    }
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return new Error("invalid email or password");
    }
    const ispasswordMatched = await user.comparepassword(password);
    if (!ispasswordMatched) {
      return new Error("invalid Password");
    }
    sendToken(user, 200, res);
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "something went wrong",
    });
  }
};
