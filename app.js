
const express = require('express');
const CORSpolicy = require('./middlewares/CORSpolicy');
const mainRoute = require('./routes/main');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(CORSpolicy);


app.use('/',mainRoute);


app.listen(8001,()=>{
    console.log("server running on port 8001");
})