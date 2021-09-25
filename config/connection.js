require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      // port: 3306,
      dialectOptions: {
        decimalNumbers: true,
      },
    });

//const sequelize = new Sequelize(
// 'db name',
// 'username',
// 'password',
// {
//  host: "localhost",
//  dialect: "mysql",
//  port: 3306,
// }
//)
//fill in the '' sections with appropriate info

module.exports = sequelize;
