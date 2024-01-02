const mongoose = require('mongoose')

const chatSchema = mongoose.Schema({

  user: {
    type: mongoose.Schema.ObjectId,
    required: true
  },
  seller: {
    type: mongoose.Schema.ObjectId,
    required: true
  },
  lastMessage: mongoose.Schema.ObjectId
})

module.exports = mongoose.model('chat', chatSchema)