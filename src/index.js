const express = require("express")

const mongoose = require("mongoose");
const cors = require("cors")
const user = require("./routes/user.routes");
const emi = require("./routes/emi.route");
const dbConnect = require("./config/db");

const app = express();


const port = process.env.PORT || 8080

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors())



app.use("/user" , user)
app.use("/emi" , emi)

app.get("/",(req,res)=>{
    res.send("Hello")
})








app.listen(port , async()=>{
    await dbConnect();
    console.log("Server is Running on Port http://localhost:8080")
})