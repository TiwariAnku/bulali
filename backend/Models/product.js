const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productId: {
    type: Number,
    unique: true,
    required: true
  },
  productName: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  colors: {
    type: [String],
    default: []
  },
  sizes: {
    type: [Number],
    default: []
  },
  options: {
    type: [{
      name: String,
      value: String
    }],
    default: []
  },
  description: {
    type: String,
    trim: true
  },
  uniqueAnniversaryGift: {
    type: String,
    trim: true
  },
  featuresAndBenefits: {
    type: String,
    trim: true
  },
  categories: {
    type: [String],
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Exporting the model
module.exports = mongoose.model('Product', productSchema);
