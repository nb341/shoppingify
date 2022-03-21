const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./dbConfig');

db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))


const port = process.env.PORT || 5000;
let baseUrl = `http://localhost:${port}/`;

const itemRouter = require('./routes/Item')
// const dotenv = require('dotenv').config();


app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/items', itemRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));