import sequelize from "../database/mariadb";
import { DataTypes } from "sequelize";

const Thursday = sequelize.define("thursday", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  incline_barbell_bench_press: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cable_crossover: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  seated_cable_row: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  single_db_row: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  db_curl: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  tricep_extensions: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Thursday;
