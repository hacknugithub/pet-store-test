# Pet Store API - Test

## First steps

Be sure to clone the repo with: _git clone "https://github.com/hacknugithub/pet-store-test.git"_ and run **npm install** before anything else.

### Configuring Database driver:

1. In this proyect we are using **sequelize** as the ORM. So it supports **Postgres**,**MySQL2**, **MariaDB**, **SQLlite3** and **Microsoft SQL Server**.

### Choose the database

2. By default the proyect is initialized with sqlite. But depending on the database you are going to use, open a terminal and run:

- npm install --save pg pg-hstore _Postgres_
- npm install --save mysql2
- npm install --save mariadb
- npm install --save sqlite3
- npm install --save tedious _Microsoft SQL Server_

3. Then, be sure to fill all the required parameters for the database of your choice within _/config/config.env_ like so:

Choose the correct dialect from these options:

- sqlite
- postgres
- mysql
- mariadb
- mssql

Modify your config.env file with the requested fields:

Example for local host:

```
NODE_ENV=develop
PORT=5000
DATABASE_DIALECT=sqlite
DATABASE_USER=root
DATABASE_PASSWORD=
DATABASE_NAME=petstore
DATABASE_HOST=localhost
```

Example for production:

```
NODE_ENV=production
PORT=5000
DATABASE_DIALECT=mysql
DATABASE_USER=user1234
DATABASE_PASSWORD=p@ssw0rd
DATABASE_NAME=petstore
DATABASE_HOST=https://domain.com/databases
```

Note that with sequelize we can use the config.json file located in config/config.json to work with a lot more of options, such as database migrations, database seeding, automatic scaffolding of models, and more.

## Start the server

Run _npm start_ to run the server on a terminal instance. To stop the server use _ctrl + c_

## Watch changes

To start a server with the watching changes feature run _npm server_. It will automatically refresh when changes are made. To stop the server use _ctrl + c_

## Tests

This proyect includes tests written in jasmine so be sure that you have already run _npm install_ to have the dependencies available.

To run the tests use _npm test_. It will automatically finish with the results of the tests.

### Postman examples

Check out this link to get examples for the API:

https://www.getpostman.com/collections/b64823c45cdd0fc08eb9

**Note:** You will need to have postman installed on your local machine and be sure tu be running on localhost.

## Wiki for the API

Don't forget to check the interactive api documentation on github pages:
_https://hacknugithub.github.io/pet-store-test/_

**Note:** The examples in the api doc page are functional. Yay!

## Known Issues

Be sure to use the sequelize-cli tool to generate migrations and seeding the database. Also the usage of this prevent the errors described bellow.

# Migrate

```
npx sequelize-cli db:migrate
```

# Seeding

```
npx sequelize-cli db:seed:all
```

# Resolved

On file db/index.js in line 14 you can use:

```
await connection.sync({ force: true });
```

To prevent errors when using pre-existing database.

Be sure to update Pet model also on line 24, if you have errors with the data not being found

```
Pet.sync({ force: true });
```
