let config;

if (process.env.DATABASE_DIALECT === "sqlite") {
  config = {
    dialect: "sqlite",
    storage: "./petstore.sqlite",
  };
} else {
  config = {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_DIALECT,
  };
}

// console.log(config);

module.exports = { config };
