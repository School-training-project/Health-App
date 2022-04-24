const userdata = require('./userdata')
const userlogin = require('./userlogin')
const usersignup = require('./usersignup')
const express=require('express')
const res = require("express/lib/response");
const cors = require('cors')
const bodyParser = require('body-parser');
const passport = require("passport");
const app = express();
app.use(express.json());
app.use(cors())
app.use(bodyParser.urlencoded({
    extended: false
  }));
app.use(bodyParser.json())


const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`listening on port ${port}....`);
});

// Passport middleware
app.use(passport.initialize());
// Passport config
require("../../config/passport")(passport);

app.use('/userdata',userdata)
app.use('/login',userlogin)
app.use('/Register',usersignup)



