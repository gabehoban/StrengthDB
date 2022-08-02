import express from "express";

import Monday from "../models/mondays";
import Tuesday from "../models/tuesdays";
import Thursday from "../models/thrusdays";
import Friday from "../models/fridays";
import WOD from "../WOD.json";

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
  switch (req.params.day) {
    case "0": // Sunday
      break;
    case "1": // Monday
      const monday = await Monday.create({
        date: req.body.date,
        barbell_bench_press: req.body.workout.barbell_bench_press,
        incline_db_bench_press: req.body.workout.incline_db_bench_press,
        bent_over_rows: req.body.workout.bent_over_rows,
        lat_pull_down: req.body.workout.lat_pull_down,
        overhead_press: req.body.workout.overhead_press,
        barbell_curls: req.body.workout.barbell_curls,
      });
      console.log("Monday's Workout Saved: \n", monday.toJSON());
      break;
    case "2": // Tuesday
      const tuesday = await Tuesday.create({
        date: req.body.date,
        squat: req.body.workout.squat,
        deadlift: req.body.workout.deadlift,
        leg_press: req.body.workout.leg_press,
        leg_curl: req.body.workout.leg_curl,
        calf_raise: req.body.workout.calf_raise,
      });
      console.log("Tuesday's Workout Saved: \n", tuesday.toJSON());
      break;
    case "3": // Wensday
      break;
    case "4": // Thursday
      const thursday = await Thursday.create({
        date: req.body.date,
        incline_barbell_bench_press:
          req.body.workout.incline_barbell_bench_press,
        cable_crossover: req.body.workout.cable_crossover,
        seated_cable_row: req.body.workout.seated_cable_row,
        single_db_row: req.body.workout.single_db_row,
        db_curl: req.body.workout.db_curl,
        tricep_extensions: req.body.workout.tricep_extensions,
      });
      console.log("Thursday's Workout Saved: \n", thursday.toJSON());
      break;
    case "5": // Friday
      const friday = await Friday.create({
        date: req.body.date,
        squat: req.body.workout.squat,
        db_lunge: req.body.workout.db_lunge,
        leg_extensions: req.body.workout.leg_extensions,
        leg_curl: req.body.workout.leg_curl,
        seated_calf_raise: req.body.workout.seated_calf_raise,
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
