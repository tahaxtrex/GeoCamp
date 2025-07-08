const { privateDecrypt } = require("crypto");
const mongoose = require("mongoose");
const { title } = require("process");
const Schema = mongoose.Schema;

const CampgroundSchema = new Schema({
    title: String,
    price: String,
    description: String,
    location: String,
});


module.exports = mongoose.model("Campground", CampgroundSchema);