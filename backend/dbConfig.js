
const Sequelize = require('sequelize');
// const client = new Client({
//     user: ,
//     host: 'db',
//     database: ,
//     password: ,
//     port: process.env.POSTGRES_PORT,
//   })

  const sequelize = new Sequelize(process.env.POSTGRES_DB, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
    host: "db",
    dialect: 'postgres'
});



  
module.exports = sequelize;