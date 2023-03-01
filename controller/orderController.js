const Order = require('../model/orderSchema')

exports.createOrder = async (req, res) => {

    // console.log(req.body)
    const order = await Order.create(req.body);

    try {
        res.status(201).json({
            status: 'success',
            order
        })
    } catch (err) {
        console.log(err)
    }
};
exports.deleteOrder = async (req, res) => {
    await Order.findByIdAndDelete(req.params.id)
    try {
        res.status(204).json({
            status: 'success',
            data: null
        })
    } catch (err) {
        console.log(err)
    }
};
exports.updateOrder = async (req, res) => {

    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    try {
        res.status(200).json({
            status: 'success',
            order
        })
    } catch (err) {
        console.log(err)
    }
};
exports.getAllOrder = async (req, res) => {
    const orders = await Order.find();
    try {
        res.status(200).json({
            status: 'success',
            total_Order: orders.length,
            orders
        })
    } catch (err) {
        console.log(err)
    }


};
