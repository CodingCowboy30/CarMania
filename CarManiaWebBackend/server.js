const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Car = require('./Cars/carModel');
const app = express();

app.use(bodyParser.json());

mongoose.connect(
  'mongodb+srv://mcarrprsvr:MyLifeMyRules2024!!@learnmongodb.fh6ixj1.mongodb.net/?retryWrites=true&w=majority&appName=LearnMongoDB',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// all car data
app.get('/cardata', async (req, res) => {
  try {
    const car = await Car.find();
    res.status(200).send(car);
  } catch (error) {
    res.status(500).send(error);
  }
});

// add new car
app.post('/cardata', async (req, res) => {
    try {
      const cars = Array.isArray(req.body) ? req.body : [req.body]; // Ensure req.body is an array
      const savedCars = await Car.insertMany(cars);
      res.status(201).send(savedCars);
    } catch (error) {
      res.status(400).send(error);
    }
  });

//  update  existing car by ID
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

// remove a car by ID
app.delete('/cardata/:id', async (req, res) => {
  try {
    const car = await Car.findByIdAndDelete(req.params.id);
    if (!car) {
      return res.status(404).send();
    }
    res.status(200).send(car);
  } catch (error) {
    res.status(500).send(error);
  }
});

// This will remove multiple cars by an array of IDs in the raw data body tab on PostMan
app.delete('/cardata', async (req, res) => {
  try {
    const ids = req.body.ids; // This is for the handling if req.body.ids is an array of IDs
    const result = await Car.deleteMany({ _id: { $in: ids } });
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

const port = 3000;

app.listen(port, () => {
  console.log('Server running on port ' + port);
});