import express from "express";
import sequelize from "./database/mariadb";
import router from "./controller/workouts";

// const monday = require("./models/mondays")
// const tuesday = require("./models/tuesdays")
// const thursday = require("./models/thrusdays")
// const friday = require("./models/fridays")

const app = express();
const PORT = 8484;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);
if (process.env.NODE_ENV == "production") {
  app.use(express.static(__dirname + "/../src/public"));
} else {
  app.use(express.static(__dirname + "/public"));
}

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, '127.0.0.1');
    console.log("App listening on port " + PORT);
  })
  .catch((err) => {
    console.log(err);
  });
