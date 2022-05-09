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
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

const userDataSchema = new mongoose.Schema({
    email: String,
    caloriesBurnt: { type: Array, "default": [] },
    stepsWalked: { type: Array, "default": [] },
    caloriesIncome: { type: Array, "default": [] },
    hoursSlept: { type: Array, "default": [] },
    hydrationRate: { type: Array, "default": [] },
    score: {type: Array, "default": []}
});
const Credential = mongoose.model("Credential", credentialsSchema);
const Data = mongoose.model("Data", userDataSchema);


module.exports.Credential = Credential;
module.exports.Data = Data;
