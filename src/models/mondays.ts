import sequelize from "../database/mariadb";
import { DataTypes } from "sequelize";

const Monday = sequelize.define("monday", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  barbell_bench_press: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  incline_db_bench_press: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  bent_over_rows: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  lat_pull_down: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  overhead_press: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  barbell_curls: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
},{
  timestamps: false
});

export default Monday;
