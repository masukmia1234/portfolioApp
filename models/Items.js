const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//create schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
    category: {
    type: String,
    required: false
  },
  
    thumb: {
    type: String,
    required: false
  },
  
    img: {
    type: String,
    required: false
  },
  
    youTube: {
    type: String,
    required: false
  },
    software: {
    type: Array,
    required: false
  },
  details: {
    type: String,
    required: false
  },

  gitHub: {
    type: String,
    required: false
  }  
  ,
  created: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = Item = mongoose.model("item", ItemSchema);
