const {Schema , model} = require("mongoose");

const UserSchema = new Schema({
    name:String,
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
})



const UserModel = model("user" , UserSchema)
module.exports = UserModel