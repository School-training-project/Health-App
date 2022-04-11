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


services.createUserData({
    email:"test123test@123.test",
    caloriesBurnt:{
        calories:1500,
        day:Date()
    },
    stepsWalked:{
        steps:12000,
        day:Date()
    },
    caloriesIncome:{
        calories: 2000,
        day:Date()
    },
    hoursSlept:{
        sleep:8,
        day:Date()
    },
    hydrationRate:4,
})

// services.removeUserData({filter:{email: 'hafedhbenslama@gmail.com'}})
services.getUserData()
// services.updateUser({email:'testetset@test.test'},{email:'rootroot@root.root'})
// services.getUser()