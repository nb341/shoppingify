const express = require('express');
const app = express();
const cors = require('cors');
const {Client} = require('pg');
// const dotenv = require('dotenv').config();
const client = new Client({
    user: process.env.POSTGRES_USER,
    host: 'db',
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT,
  })


app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// const client = new Client({
//     user: 'postgres',
//     host: 'db',
//     database: 'shoppingify',
//     password: 'postgres',
//     port: 5432,
//   })
client.connect(err => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('connected')
  }
})
  client.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    client.end()
  })