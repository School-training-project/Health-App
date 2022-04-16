const services = require('./services')

// services.getUser()
// services.getUserData()
// services.createUser({
//     name:{
//         firstName:"Root",
//         lastName:'Root'
//     },
//     email:"rootroot@root.root",
//     password:"root"
// })

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

// services.removeUserData({email: 'test123test@123.test'})
// services.updateUserData({email:'root.root@root.root'},{email:'testetset@test.test'})
services.pushObjDataStepsWalked(15000,{email: 'testetset@test.test'})
services.pushObjDataCaloriesBurnt(1780,{email: 'testetset@test.test'})
services.pushObjDataCaloriesIncome(1800,{email: 'testetset@test.test'})
services.pushObjDataHoursSlept(7,{email: 'testetset@test.test'})
services.getUserData()
// services.getUser()