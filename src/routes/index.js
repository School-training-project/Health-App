const userdata = require('./userdata')
const express=require('express')
const res = require("express/lib/response");
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());
app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json())


const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`listening on port ${port}....`);
});

app.use('/userdata',userdata)

