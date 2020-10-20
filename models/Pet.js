const { DataTypes } = require("sequelize");
const { sequelize } = require("../db");
const sequelize_instance = sequelize;

const Pet = sequelize_instance.define("Pet", {
  id: {
    type: DataTypes.INTEGER(64),
    allowNull: false,
    unique: "compositeIndex",
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tag: {
    type: DataTypes.STRING,
  },
});

export default Pet;
