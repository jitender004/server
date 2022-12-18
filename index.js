const express = require("express");
require("dotenv").config();
const CONNECT_DB = require("./db/config");
const USERMODEL = require("./model/User");
const authRoutes = require("./routes/user.route")
const UserRouter = require("./routes/route");
const app = express();

//middleware
app.use(express.json());
app.use("/api/user", UserRouter);
app.use("/api", authRoutes);

// database connection
CONNECT_DB();



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Port is listening on port " + PORT);
});
