const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser);
app.use(express.json());
const errormidddleware = require("./middleware/error");
const product = require("./routes/productRoutes");
const user = require("./routes/userRoutes");

app.use(errormidddleware);
app.use("/api/v1", product);
app.use("/api/v1", user);

module.exports = app;
