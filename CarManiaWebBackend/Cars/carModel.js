/* eslint-disable no-undef */
const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  make: {
    type: String,
    default: 'UNKNOWN',
    required: true  
  },
  model: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true  
  },
  price: {
    type: Number,
    required: true,
    min: 500
  },
  photo: {
    type: String,
    default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtc3-y63KN_r5LwOC9PNqpwc5C1JPeN36_ug&s"
  },
  rating: {
    type: Number
  },
  mileage: {
    type: Number,
    required: true
  },
  oneOwner: {
    type: Boolean
  },
  status: {
    type: String,
    enum: ['Available', 'Sold', 'Pending Sale'],
    default: 'Available'
  }
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;