const db= require("../dbConnection")



const createUser= async (obj)=> {
    const credential= new db.Credential({
        name:obj.name,
        email:obj.email,
        password:obj.password})
    await credential.save()
}


const createUserData=async(obj)=>{
    const data= new db.Data({
        email:obj.email,
        caloriesBurnt:obj.caloriesBurnt,
        stepsWalked:obj.stepsWalked,
        caloriesIncome:obj.caloriesIncome,
        hoursSlept:obj.hoursSlept,
    })
    await data.save()
}


const getUserData= async (obj={})=>{
    const data= await db.Data.find({filter:obj})
    console.log(data)
    return data
}

const getUser = async (obj={}) => {
    const users = await db.Credential.find({filter:obj});
    console.log(users);
};

const updateUser = async (obj={},cond)=>{
    const result = await db.Credential.updateOne({filter:cond},{$set:obj})
    console.log(result)
} 

const updateUserData = async (obj={},cond)=>{
    const result = await db.Data.updateOne({filter:cond},{$set:obj})
    console.log(result)
} 

const removeUser = async (obj) =>{
    const result = await db.Credential.deleteOne({filter:obj})
    console.log(result)
}
const removeUserData = async (obj) =>{
    const result = await db.Data.deleteOne({filter:obj})
    console.log(result)
}

module.exports.removeUser=removeUser
module.exports.removeUserData=removeUserData
module.exports.updateUser=updateUser
module.exports.updateUserData=updateUserData
module.exports.createUser=createUser
module.exports.getUser=getUser
module.exports.getUserData=getUserData
module.exports.createUserData=createUserData
