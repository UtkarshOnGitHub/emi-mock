const {Router} = require("express")
const UserModel = require("../modals/User.modal")



const user = Router()



user.post("/signup" , async (req,res)=>{
    const {name,email,password} = req.body;
    console.log(name,email,password);
    const check = await UserModel.findOne({email})
    if(check){
        res.status(409).send("Cannot Create two User With same Email ");
        return
    }
    try {
        const user = new UserModel({name,email,password});
        await user.save() 
        res.send("User Created Succsessfully")
    } catch (error) {
        console.log(error)
    }

})



user.post("/login" , async(req,res)=>{
    const {email , password} = req.body;
    const user = await UserModel.findOne({email , password})
    if(!user){
        return res.send("Invalid Credential")
    }
    res.send({token:`${email}:${user.name}:${password}`}).status(200)
})


user.get("/getProfile" ,async(req,res)=>{
    const {email , name} = req.body;
    const user = await UserModel.findOne({email , name})
    res.send({user:user})
})

user.get("/logout" ,async(req,res)=>{
    localStorage.removeItem("token")
    res.send({message:"USER LOGGED OUT"})
})




module.exports = user