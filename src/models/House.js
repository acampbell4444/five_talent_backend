var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var House = new Schema({
   mls_num: Number,
   street1: String,
   street2: String,
   city: String,
   stateName: String,
   zipCode: Number,
   neighborhood: String,
   sales_price: Number,
   date_listed: String,
   bedrooms: Number,
   bathrooms: Number,
   photo: String,
   squareFeet: Number,
   description: String
})

module.exports = mongoose.model('House', House)