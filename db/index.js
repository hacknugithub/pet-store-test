const { Sequelize } = require("sequelize");

const config = require("../config/db.config");
// TODO: Consider implementing dinamic assigment of database with parameters as driver option
const sequelizeConn = async () => {
  const connection = new Sequelize(config.config);
  try {
    await connection.authenticate();
    console.log({
      success: true,
      message: "Connection has been established successfully",
    });
    console.log(`Database connected: ${connection}`);
    await connection.sync({ alter: true });
    return connection;
  } catch (error) {
    return { success: false, message: error.message };
  }
};

module.exports = sequelizeConn;
