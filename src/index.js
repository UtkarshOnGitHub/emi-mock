const express = require("express")

const mongoose = require("mongoose");
var cors = require("cors")
const user = require("./routes/user.routes");
const emi = require("./routes/emi.route");

const app = express();


const port = process.env.PORT || 8080

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors())



app.use("/user" , user)
app.use("/emi" , emi)








mongoose.connect("mongodb://localhost:27017/mocktest").then(()=>{
    app.listen(port , ()=>{
        console.log("Server is Running on Port http://localhost:8080")
    })
})