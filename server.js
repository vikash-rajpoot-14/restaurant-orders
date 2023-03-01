const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const OrderRouter = require('./routes/orderRoute');
const cors = require('cors');

dotenv.config({ path: "./config.env" });
const port = process.env.PORT || 3000;

const app = express()
app.use(express.json())
app.use(cors());
const DB = process.env.DB.replace('<PASSWORD>', process.env.PASSWORD);

mongoose.set("strictQuery", false);
mongoose.connect(DB, () => {
    console.log('connected to database')
})

app.use('/crudcrud.com/orders', OrderRouter);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})