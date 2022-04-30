const express =require('express')
const { Data } = require('../db/dbConnection')
const router = express.Router()
const db=require('../db/services/services')


router.get('/:email',async(req,res)=>{
    const email=req.params.email
    const result=await db.getUserData({email:email})
    res.json(result).status(200)
})
router.post("/:email",async(req,res)=>{
    const email = req.params.email
    const caloriesIncome= req.body.income
    const caloriesBurned=req.body.burnned
    const hoursSlept= req.body.slept
    const stepsWalked =req.body.walked
    const hydrationRate=req.body.rate
    try{
        await db.pushObjDataCaloriesBurnt(parseInt(caloriesBurned),{email:email})
        await db.pushObjDataCaloriesIncome(parseInt(caloriesIncome),{email:email})
        await db.pushObjDataHoursSlept(parseInt(hoursSlept),{email:email})
        await db.pushObjDataStepsWalked(parseInt(stepsWalked),{email:email})
        await db.pushObjDataHydrationRate(parseInt(hydrationRate),{email:email})
        res.send("Sucess in Updating").status(200)
        
    }catch(err){
        res.status(400).send(err)
    }
    
})

module.exports=router