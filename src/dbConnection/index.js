const mongoose =require('mongoose')

mongoose.connect('mongodb://127.0.0.1/healthdb')
    .then(()=>console.log("#### connected to db... ####"))
    .catch(err=>console.error("{{{####}}} could not connect to db ... {{{####}}}"))
    const credentialsSchema= new mongoose.Schema({
        userName: String,
        email:String,
        password: String,
    })
    const Credential=mongoose.model('Credential',credentialsSchema)
async function createUser() {
    const credential= new Credential({
        userName:'hafedh ben slama',
        email:'hafedhbenslama@gmail.com',
        password:'./'
    })
    const result = await credential.save()
    console.log(result)
}
createUser()

const getUser=async()=>{
    const users=await Credential.find()
    .limit(1)
    .select({userName:1})
    console.log(users)
} 
getUser()