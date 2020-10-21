# Pet Store API - Test

## First steps

Be shure to clone the repo with and run **npm install** before anything

## Configuring Database driver:

In this proyect we are using **sequelize** as the ORM. So it supports **Postgres**,**MySQL2**, **MariaDB**, **SQLlite3** and **Microsoft SQL Server**.

### Choose the database

By deault the proyect is initialized with sqlite. But depending on the database you are going to use, open a terminal and run:

- npm install --save pg pg-hstore _Postgres_
- npm install --save mysql2
- npm install --save mariadb
- npm install --save sqlite3
- npm install --save tedious _Microsoft SQL Server_

## Start the server

Run _npm start_ to run the server on a terminal instance. To stop the server use ctrl + c.

### Watch changes

To start a server with watch changes feature run _npm server_. It will automatically refresh when changes are made. To stop the server use ctrl + c.

## Tests

This proyect includes tests written in jasmine so be sure that you have already run _npm install_.

To run the tests use _npm test_. It will automatically finish with the results of the tests.
