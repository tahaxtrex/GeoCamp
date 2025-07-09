const cities = require("./germany")
const mongoose = require('mongoose')
const Campground = require("../models/campground");
const {descriptors, places} = require('./seedHelpers')


mongoose.connect('mongodb://127.0.0.1:27017/camp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("✅ Connected to MongoDB");
})
.catch(err => {
  console.error("❌ Connection error:", err);
});

const sample = (array) => array[Math.floor(Math.random() * array.length)]

const seedDB = async ()=>{
    await Campground.deleteMany({});
    for(let i = 0; i<50; i++){
        const randnumber = Math.floor(Math.random() * cities.length);
        const camp = new Campground({
            title: `${sample(descriptors)} ${sample(places)}`,
            location : `${cities[randnumber].name}, ${cities[randnumber].state}`
        })
        await camp.save()
    }
}

seedDB().then( ()=> {
    mongoose.connection.close()
})