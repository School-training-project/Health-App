const mongoose =require('mongoose')

mongoose.connect('mongodb://localhost/healdb')
    .then(()=>console.log("#### connected to db... ####"))
    .catch(err=>console.error("{{{####}}} could not connect to db ... {{{####}}}"))


