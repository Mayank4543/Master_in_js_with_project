const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

const errormidddleware = require("./middleware/error");
app.use(express.json());
app.use(cookieParser());
const product = require("./routes/productRoutes");
const user = require("./routes/userRoutes");

app.use(errormidddleware);
app.use("/api/v1", product);
app.use("/api/v1", user);

module.exports = app;
