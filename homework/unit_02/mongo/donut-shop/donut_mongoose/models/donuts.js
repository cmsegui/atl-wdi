//requirements: require mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// //create your donut schema:
var newDonut = new Schema({
    name: String,
    description: String,
    img: String,
    price: Number,
    qty: Number,
});
var DonutModel = mongoose.model('Donut', newDonut);
// //export your donut with module.exports()
module.exports = DonutModel;