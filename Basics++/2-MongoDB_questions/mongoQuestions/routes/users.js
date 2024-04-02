var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/User");
const useSchema = mongoose.Schema({
  name: String, 
  username: String,
  intrests : [],
  date: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('User',useSchema);
