const mongoose = require('mongoose');



const hotelSchema = new mongoose.Schema({

    name:         { type: String,   required: true},
    type:         { type: String,   required: true},
    city:         { type: String,   required: true},
    address:      { type: String,   required: true},
    distance:     { type: String,   required: true},
    photos:       { type: [String]},
    title:        { type: String,   required: true},
    desc:         { type: String,   required: true},
    rating:       { type: Number,   min: 0, max: 5},
    rooms:        { type: [String]},
    cheapestPrice:{ type: Number,   required: true},
    featured:     { type: Boolean,  default: false},
    isDeleted:    { type: Boolean,  default: false}             //changes


}, {timestamps:true});



module.exports = mongoose.model('hotel', hotelSchema);      //or ES6 - export default mongoose.model("Hotel", HotelSchema)