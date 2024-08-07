/* eslint-disable no-undef */
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors
const Joi = require('joi');
const Car = require('./Cars/carModel');

const app = express();
// eslint-disable-next-line no-unused-vars
const idSchema = Joi.string().pattern(/^[0-9a-fA-F]{24}$/);

app.use(cors()); // Enable CORS
app.use(bodyParser.json());

mongoose.connect(
  'mongodb+srv://mcarrprsvr:MyLifeMyRules2024!!@learnmongodb.fh6ixj1.mongodb.net/?retryWrites=true&w=majority&appName=LearnMongoDB',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// All car data
app.get('/cardata', async (req, res) => {
  try {
    const filters = {};
    if (req.query.make) filters.make = req.query.make;
    if (req.query.model) filters.model = req.query.model;
    if (req.query.year) filters.year = Number(req.query.year);
    if (req.query.price) filters.price = Number(req.query.price);
    if (req.query.rating) filters.rating = Number(req.query.rating);
    if (req.query.mileage) filters.mileage = Number(req.query.mileage);
    if (req.query.oneOwner) filters.oneOwner = req.query.oneOwner === 'true';
    if (req.query.status) filters.status = req.query.status;
    const car = await Car.find(filters);
    res.status(200).send(car);
  } catch (error) {
    res.status(500).send(error);
  }
});

// One  car data by ID for rendering on CarDetail Page
app.get('/cardata/:id', async (req, res) => {
    try {
      const car = await Car.findById(req.params.id);
      if (!car) {
        return res.status(404).send({ error: 'Car not found' });
      }
      res.status(200).send(car);
    } catch (error) {
      res.status(500).send(error);
    }
  });

// Add new car
app.post('/cardata', async (req, res) => {
  try {
    const cars = Array.isArray(req.body) ? req.body : [req.body]; // Ensure req.body is an array
    const savedCars = await Car.insertMany(cars);
    res.status(201).send(savedCars);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Update existing car by ID
app.put('/cardata/:id', async (req, res) => {
  try {
    const car = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!car) {
      return res.status(404).send();
    }
    res.status(200).send(car);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Remove a car by ID
app.delete('/cardata/:id', async (req, res) => {
  try {
    const car = await Car.findByIdAndDelete(req.params.id);
    if (!car) {
      return res.status(404).send({ error: "Invalid ID No Car Found" });
    }
    res.status(200).send(car);
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

// Remove multiple cars by an array of IDs
app.delete('/cardata', async (req, res) => {
  try {
    const ids = req.body.ids; // This is for the handling if req.body.ids is an array of IDs
    if (!Array.isArray(ids) || ids.length === 0) {
      return res.status(400).send({ error: 'Invalid input: Provide an array of IDs' });
    }
    const result = await Car.deleteMany({ _id: { $in: ids } });
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

const port = 3000;

app.listen(port, () => {
  console.log('Server running on port ' + port);
});
