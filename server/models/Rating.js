const mongoose = require('mongoose')


const ratingSchema = mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  productId: {
    type: mongoose.Schema.ObjectId,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
})

module.exports = mongoose.model('rating', ratingSchema)