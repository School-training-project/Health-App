const express =require('express')
const { Data } = require('../db/dbConnection')
const router = express.Router()
const db=require('../db/services/services')



router.get('/',async(req,res)=>{
    const result=await db.getUserData({email:'root.root@root.root'})
    res.json(result).status(200)
})
router.put("/",async(req,res)=>{
    try{
        
        res.send("Sucess in Updating").status(200)
        
    }catch(err){
        res.status(400).send(err)
    }
    
})

module.exports=router