const services = require('./services')

services.getUser()
services.getUserData()
services.createUser({
    name:{
        firstName:"Root",
        lastName:'Root'
    },
    email:"rootroot@root.root",
    password:"root"
})

services.removeUserData({filter:{email: 'hafedhbenslama@gmail.com'}})
services.getUserData()
services.updateUser({email:'testetset@test.test'},{email:'rootroot@root.root'})
services.getUser()