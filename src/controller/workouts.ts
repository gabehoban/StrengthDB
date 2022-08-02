import express from "express";
import { QueryTypes } from "sequelize";
import Monday from "../models/mondays";
import Tuesday from "../models/tuesdays";
import Thursday from "../models/thrusdays";
import Friday from "../models/fridays";
import WOD from "../WOD.json";
import { serialize } from "v8";

const router = express.Router();

router.get("/api/:day", function (req, res) {
  switch (req.params.day) {
    case "0": // Sunday
      res.send(WOD["0"]);
      break;
    case "1": // Monday
      res.send(WOD["1"]);
      break;
    case "2": // Tuesday
      res.send(WOD["2"]);
      break;
    case "3": // Wensday
      res.send(WOD["3"]);
      break;
    case "4": // Thursday
      res.send(WOD["4"]);
      break;
    case "5": // Friday
      res.send(WOD["5"]);
      break;
    case "6": // Saturday
      res.send(WOD["6"]);
      break;
    default:
      console.log("Error - API not found.");
  }
  res.end();
});

router.post("/api/:day", async function (req, res) {
  const today = new Date();

  switch (req.params.day) {
    case "0": // Sunday
      break;
    case "1": // Monday
      Monday
        .findAll()
        .then((entry) => {
          console.log(entry)
        })
      const monday = await Monday.create({
        date: req.body["date"],
        barbell_bench_press: req.body["barbell_bench_press"],
        incline_db_bench_press: req.body["incline_db_bench_press"],
        bent_over_rows: req.body["bent_over_rows"],
        lat_pull_down: req.body["lat_pull_down"],
        overhead_press: req.body["overhead_press"],
        barbell_curls: req.body["barbell_curls"],
      });
      console.log("Monday's Workout Saved: \n", monday.toJSON());
      break;
    case "2": // Tuesday
      Tuesday.findAll({
        raw: true,
        where: {
          date: new Date().toISOString().slice(0,10)
        }
      }).then(async (today) => {
        if (today.length != 0) {
          res.send({"status": "failed"});
        } else {
          const newWorkout = await Tuesday.create({
              date: req.body["date"],
              squat: req.body["squat"],
              deadlift: req.body["deadlift"],
              leg_press: req.body["leg_press"],
              leg_curl: req.body["leg_curl"],
              calf_raise: req.body["calf_raise"],
            });
            console.log("Tuesday's Workout Saved: \n", newWorkout.toJSON());
            res.send({"status": "success"});
        }
      })
      break;
    case "3": // Wensday
      break;
    case "4": // Thursday
      const thursday = await Thursday.create({
        date: req.body["date"],
        incline_barbell_bench_press:
          req.body["incline_barbell_bench_press"],
        cable_crossover: req.body["cable_crossover"],
        seated_cable_row: req.body["seated_cable_row"],
        single_db_row: req.body["single_db_row"],
        db_curl: req.body["db_curl"],
        tricep_extensions: req.body["tricep_extensions"],
      });
      console.log("Thursday's Workout Saved: \n", thursday.toJSON());
      break;
    case "5": // Friday
      const friday = await Friday.create({
        date: req.body["date"],
        squat: req.body["squat"],
        db_lunge: req.body["db_lunge"],
        leg_extensions: req.body["leg_extensions"],
        leg_curl: req.body["leg_curl"],
        seated_calf_raise: req.body["seated_calf_raise"],
      });
      console.log("Friday's Workout Saved: \n", friday.toJSON());
      break;
    case "6": // Saturday
      break;
    default:
      console.log("Error - API not found.");
  }
  res.end();
});

export default router;
