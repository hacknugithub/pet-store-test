const { Sequelize } = require('sequelize');

// Conection demo for sqlite
// TODO: Consider implementing dinamic assigment of database with parameters as driver option
export const sequelize = () => {
    const connection = new Sequelize({
        dialect: 'sqlite',
        storage: './petstore.sqlite',
    });
    try {
        await connection.authenticate();
        console.log({success: true, message: "Connection has been established successfully"});
        return connection;
    } catch(error){
        return {success: false, message: error.message}
    }
} 

module.exports = sequelize;