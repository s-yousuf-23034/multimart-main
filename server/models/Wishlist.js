const mongoose = require('mongoose')


const wishlistSchema = mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  count:{
    type:Number,
    default:0
  },
  products: {
    type:[mongoose.Schema.ObjectId],
    default:[]
  }

})
module.exports = mongoose.model('wishlist', wishlistSchema);