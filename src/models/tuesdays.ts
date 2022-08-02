import sequelize from "../database/mariadb";
import { DataTypes } from "sequelize";

const Tuesday = sequelize.define("tuesday", {
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
  squat: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  deadlift: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  leg_press: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  leg_curl: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  calf_raise: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Tuesday;
