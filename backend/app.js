const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const customerRoutes = require("./routes/customer-registration");
// const customerRoutes = require("");
// const equipmentRoutes = require("");
// const projectRoutes = require("");

const app = express();

mongoose.set("useFindAndModify", false); //Deprecated warnings
//MongoDB connections
mongoose
  .connect(
    "mongodb+srv://eishan:VWjMQglSWqBg8VRp@cluster0.43bju.mongodb.net/hmsItp?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log("Connection Failed");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//CROS definitions
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-width, Content-Type, Accept"
  );

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/customers", customerRoutes);
// app.use("/api/employees", employeesRoutes);
// app.use("/api/equipment", equipmentRoutes);
// app.use("/api/project", projectRoutes);

module.exports = app;
