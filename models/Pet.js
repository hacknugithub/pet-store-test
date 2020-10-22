"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pet.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER(64),
      },
      name: { type: DataTypes.STRING, allowNull: false },
      tag: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Pet",
      timestamps: false,
    }
  );
  return Pet;
};
