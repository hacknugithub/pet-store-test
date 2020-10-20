const { Sequelize } = require("sequelize");

// Conection demo for sqlite
// TODO: Consider implementing dinamic assigment of database with parameters as driver option
const sequelizeConn = async () => {
  const connection = new Sequelize({
    dialect: "sqlite",
    storage: "./petstore.sqlite",
  });
  try {
    await connection.authenticate();
    console.log({
      success: true,
      message: "Connection has been established successfully",
    });
    console.log(`Database connected: ${connection}`);
    await connection.sync({ force: true });
    return connection;
  } catch (error) {
    return { success: false, message: error.message };
  }
};

module.exports = sequelizeConn;
