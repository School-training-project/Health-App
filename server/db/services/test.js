const services = require('./services')

// services.getUser()
// services.getUserData()
const test=async()=>{await services.createUser({
    name:"hahaha",
    email:"rootroooot@root.root",
    password:"root"
})
}
console.log(test)
//     
//     // caloriesBurnt:[{
//     //     calories:1500,
//     //     day:Date()
//     // },],
//     // stepsWalked:[{
//     //     steps:12000,
//     //     day:Date()
//     // },],
//     // caloriesIncome:[{
//     //     calories: 2000,
//     //     day:Date()
//     // },],
//     // hoursSlept:[{
//     //     sleep:8,
//     //     day:Date()
//     // },],
//     // hydrationRate:4,

// services.createUserData({
//     email:"root.root@root.root",
// })

// services.removeUserData({email: 'root.root@root.root'})
// services.updateUserData({email:'root.root@root.root'},{email:'testetset@test.test'})
// services.pushObjDataStepsWalked(6824,{email: 'root.root@root.root'})
// services.pushObjDataCaloriesBurnt(6915,{email: 'root.root@root.root'})
// services.pushObjDataCaloriesIncome(8214,{email: 'root.root@root.root'})
// services.pushObjDataHoursSlept(3,{email: 'root.root@root.root'})
// services.pushObjDataHydrationRate(7,{email: 'root.root@root.root'})
// services.getUserData()
// services.getUser()