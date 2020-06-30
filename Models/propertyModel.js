import {Schema, model} from 'mongoose';
//const Schema = mongoose.Schema;
//const 
//const {Schema, model} = require('mongoose');
function random() {
    var numGen = Math.floor(Math.random() * 5) + 1
    return numGen
}
const imgNum = `./static/img/${random()}.jpg`;

const PropertySchema = new Schema({
    title: String,
    type: {type: String, emun: ['vivienda', 'casa', 'hostal']},
    address: String,
    rooms: {type: Number, default: 0},
    price: Number,
    area: Number,
    image: {type: String, default: imgNum}
});

module.exports = model("Property",PropertySchema);