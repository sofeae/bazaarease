const mongoose = require('mongoose')

const Schema = mongoose.Schema

const orderSchema = new Schema({
  menuId: {
    type: String,
  },
  orderId: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  user_id: {
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Order', orderSchema)