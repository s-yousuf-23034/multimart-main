const mongoose = require('mongoose')


const cartSchema =mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    default: 0
  },
  products: {
    type: [{
      productId: mongoose.Schema.ObjectId,
      customizations: [{
        name: String,
        option: String
      }]
    }],
    default: []
  }

})
module.exports = mongoose.model('cart', cartSchema);