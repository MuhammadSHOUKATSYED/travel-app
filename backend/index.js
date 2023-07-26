const express = require('express');
const app = express();
const connectdb = require('./config_db');
require("dotenv").config();
const MONGODB_URI = "mongodb+srv://i202303:AllahMolaPunjtanPakASarewithme786@cluster0.hl8yuqy.mongodb.net/travel-app";
connectdb(MONGODB_URI);


app.listen(3001, (req,res)=>{
    console.log('server running on the port 3001');

})