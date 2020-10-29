"use strict";
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      token: {
        type: DataTypes.STRING,
        notNull: true,
        defaultValue: "",
      },
    },
    {
      sequelize,
      modelName: "User",
      timestamps: false,
    }
  );
  User.addHook("afterCreate", async function (user, options) {
    const createToken = await jwt.sign(
      { payload: user.id },
      process.env.TOP_SECRET,
      {
        expiresIn: 60 * 60 * 60,
      }
    );
    console.log(`${createToken}`.yellow);

    const salt = await bcrypt.genSalt(10);
    const hashedPwd = await bcrypt.hash(user.password, salt);
    console.log(`${hashedPwd}`.red);
    user.token = createToken;
    user.password = hashedPwd;
  });
  // User.sync({ force: true });
  return User;
};
