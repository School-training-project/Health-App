const express =require('express')
const router = express.Router()
const db=require('../db/services/services')



router.get('/',async(req,res)=>{
    const result=await db.getUserData({email:'test123test@123.test'})
    res.json(result).status(200)
})

module.exports=router