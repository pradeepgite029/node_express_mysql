const mysql = require('mysql2/promise');
require('dotenv').config();
const { Sequelize } = require('sequelize');
const mysqlPool = new Sequelize(process.env.DATABASE_URL, process.env.MYSQL_USERNAME, '', {
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
}
);
require('dotenv').config();

try {
    const connect = async () => {
        await mysqlPool.authenticate();
   }
    console.log('Connection has been established successfully.');
    module.exports = mysqlPool;
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
// const mysqlPool = mysql.createPool({
// host: process.env.MYSQL_HOST,
// user: process.env.MYSQL_USERNAME,
// password: "",
// database: process.env.DATABASE_URL

// });