const mongoose = require("mongoose");
var uuid = require("node-uuid");

mongoose
    .connect("mongodb://127.0.0.1/healthdb")
    .then(() => console.log("#### connected to db... ####"))
    .catch((err) =>
        console.error("{{{####}}} could not connect to db ... {{{####}}}")
    );
const credentialsSchema = new mongoose.Schema({
    _id: { type: String, default: uuid.v1 },
    name: {
        firstName:{type:String},
        lastName:{type:String}
    },
    email: String,
    password: String,
    });
const userDataSchema = new mongoose.Schema({
    email: String,
    caloriesBurnt: { 
        calories: { type: Number },
        day: { type: Date } },
    stepsWalked: { 
        steps: { type: Number },
        day: { type: Date } },
    caloriesIncome: { 
        calories: { type: Number },
        day: { type: Date } },
    hoursSlept: { 
        sleep: { type: Number },
        day: { type: Date } },
    hydrationRate:Number,
    });
const Credential = mongoose.model("Credential", credentialsSchema);
const Data = mongoose.model("Data",userDataSchema)

module.exports.Credential=Credential
module.exports.Data=Data