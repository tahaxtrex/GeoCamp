const express = require("express");
const app = express();
const path = require("path");
const mongoose = require('mongoose')
const Campground = require("./models/campground")

mongoose.connect('mongodb://127.0.0.1:27017/myDatabaseName', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("✅ Connected to MongoDB");
})
.catch(err => {
  console.error("❌ Connection error:", err);
});

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))



app.get("/", (req, res)=>{
    res.render("home");
});

app.get("/makecampground", async (req, res)=>{
    const camp = new Campground({title: "My backyard"})
    await camp.save();
    res.send(camp);
})

app.get("/dummy", async (req, res)=>{
    res.render('dummy')
})




app.listen(8001, ()=>{
    console.log('works properly')
})