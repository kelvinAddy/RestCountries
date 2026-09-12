require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const { CountryModel } = require('../models/Countries.js');
const path = require('path');

app.use(express.json());

app.use(express.static('./public/dist'));

morgan.token('body', (req, res) => {
  JSON.stringify(req.body);
});

app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms :body'),
);

app.get('/api/countries', (req, res, next) => {
  CountryModel.find({})
    .then((data) => res.json(data))
    .catch(next);
});

app.get(/.*/, (req, res) =>
  res.sendFile(path.resolve('./public/dist/index.html')),
);

app.use((error, req, res, next) => {
  res.status(500).json({ error: error.message });
});

mongoose
  .connect(process.env.MONGODB_URI, { family: 4 })
  .then(() => {
    console.log('Database connected');
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on PORT: ${process.env.PORT}`);
    });
  })
  .catch((error) => console.log(error.message));
