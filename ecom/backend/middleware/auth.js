const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.isAuthenticatedUser = async (req, res, next) => {
  try {
    const { token } = req.cookies; // Replace 'tokenName' with the actual name of your token

    if (!token) {
      return next(new Error("Please Login to access this resource"));
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decodedData.id);

    next();
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    next(error); // Pass the error to the next middleware
  }
};
exports.authorisedRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new Error(
          `Role ${req.user.role} is not allowed to access this resource`
        )
      );
    }
    next();
  };
};
