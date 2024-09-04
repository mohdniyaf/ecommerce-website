const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  categoryName: {
    type: String,
    trim: true,        // Corrected from "trim":"true" to trim: true
    uppercase: true,   // Corrected from "uppercase":"true" to uppercase: true
    unique: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
});

const category = mongoose.model('category', categorySchema); // Changed model name to 'Category'
module.exports = category;
