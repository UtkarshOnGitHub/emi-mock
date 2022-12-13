const {Router} = require("express")


const emi = Router()

emi.post("/calculateEMI" , async(req,res)=>{
    const {loan , annualIntrest , time} = req.body;
    if(!loan || !annualIntrest || !time){
        res.send("Field Can not Be Empty")
    }
    let rate = (annualIntrest/12)/100
    let newVal = Math.pow(1+rate ,time)
    let emiVal =  ((loan*rate*newVal) / (newVal-1)).toPrecision(4)
    let total = emiVal*time
    let interest = total-loan
    let data = {EMI:emiVal,intrest:interest, total:total}
    
    res.send({message:"EMI Calculated SuccessFully" , data:data})
})  





module.exports = emi