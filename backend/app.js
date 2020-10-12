const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const customerRoutes = require("./routes/customer-registration");
const employeeRoutes = require("./routes/employee-management");
const packageRoutes = require("./routes/package-management");
const salarysRoutes = require("./routes/salary-management");
const reservationRoutes = require("./routes/room-reservation");
const inventoryRoutes = require("./routes/Inventory-add-Items");
const supplierRoutes = require("./routes/supplier-registration");
const spaRoutes = require("./routes/spa-management");
const eventRoutes = require("./routes/event-management");
const attendanceRoutes = require("./routes/attendace-management");

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

   //CROS definitions============================================
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-width, Content-Type, Accept"
  );

  //===============================================================
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/customers", customerRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/packages", packageRoutes);
app.use("/api/salarys", salarysRoutes);
app.use("/api/reservations", reservationRoutes);
app.use("/api/inventories", inventoryRoutes);
app.use("/api/suppliers", supplierRoutes);
app.use("/api/spas", spaRoutes);
app.use("/api/events",eventRoutes);
app.use("/api/attendanses",attendanceRoutes);

module.exports = app;
