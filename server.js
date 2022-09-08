/* eslint-disable prettier/prettier */
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 8800;

app.listen(port, async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_STRING,
      { dbName: 'hello-world' }
    );
  } catch(error) {
    console.log(`====>Failed to connect to DB<==== Error: ${error}`);
    process.exit(1);
  }
  console.log(`====>Connected to MongoDB`);
  console.log(`====>HelloWorld app listening on port ${port}<====`);
});

app.get('/', (req, res) => res.send('hello'));
