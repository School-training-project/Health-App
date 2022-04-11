const home = require('./home')
const express=require('express')
const res = require("express/lib/response");
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors())

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`listening on port ${port}....`);
});

app.use('/home',home)