import sequelize from "../database/mariadb";
import { DataTypes } from "sequelize";

const Friday = sequelize.define("friday", {
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
  db_lunge: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  leg_extensions: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  leg_curl: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  seated_calf_raise: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Friday;
