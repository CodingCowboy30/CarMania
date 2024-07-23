const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Joi = require('joi')
const Car = require('./Cars/carModel');
const app = express();
const idSchema = Joi.string().pattern(/^[0-9a-fA-F]{24}$/);
const idsSchema = Joi.object({
  ids: Joi.array().items(idSchema).required().messages({
      'array.base': `"ids" should be an array`,
      'array.includesRequiredUnknowns': `"ids" should contain valid IDs`,
      'string.pattern.base': `"ids" should contain valid MongoDB IDs` // you can customize messages
  })
});
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
      return res.status(404).send({error: "Invalid ID No Car Found"});
    }
    res.status(200).send(car);
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

// This will remove multiple cars by an array of IDs in the raw data body tab on PostMan
app.delete('/cardata', async (req, res) => {
  try {
    const ids = req.body.ids; // This is for the andling if req.body.ids is an array of IDs
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