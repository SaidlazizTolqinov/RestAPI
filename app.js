const express = require("express")
const app= express()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const rIndex = require("./routers/movie")
const port = process.env.PORT || '3000';



mongoose.connect("mongodb://localhost:27017/new_project")
const db = mongoose.connection
db.on("open", ()=>{
    console.log("mongodb running");
})
db.on("error", ()=>{
    console.log(err);
})


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(rIndex)

app.listen(port, ()=>{
    console.log('server running');
})