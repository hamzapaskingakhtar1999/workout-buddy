require("dotenv").config();

const express = require("express");
const cors = require("cors");

/* const mongoose = require(mongoose); */

const workoutRoutes = require("./routes/workout");
const { default: mongoose } = require("mongoose");
/*  Invoke express to create an express server */

const app = express();

/* Middleware */
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

/* Routes */
app.use("/api/workouts", workoutRoutes);

// Connect to Database

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    /* Listen */
    app.listen(process.env.PORT, () => {
      console.log(
        "Connected to Database & Listening on Port",
        process.env.PORT
      );
    });
  })
  .catch((error) => console.log(error));
