const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({
    amount: {
        type: String,
        required: [true, 'A order must have a amount']
    },
    dish: {
        type: String,
        required: [true, 'A order must conatain a dish'],
        trim: true
    },
    category: {
        type: String,
        required: [true, 'A order must have a category'],
        trim: true,
    },
})

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;