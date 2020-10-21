const { Sequelize, DataTypes } = require("sequelize");
const Pet = require("./Pet");
const sequelize = new Sequelize("sqlite::memory:");

const Pets = sequelize.define("Pets", {
  items: DataTypes.ARRAY(Pet),
});

module.exports = Pets;
