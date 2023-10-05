const express = require('express');
const morgan = require('morgan');
const app = express();

require('dotenv').config();
app.use(express.json());

const dbConnect = require("./config/dbConfig");
const userRoute = require('./routes/userRoutes');
const cookieParser=require("cookie-parser");

// log-request
app.use(morgan('dev'));

// dbConnect();
app.use(cookieParser());
app.use('/api/user', userRoute);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>{
    console.log(`Server running on port http://localhost:${PORT}`);
})

app.get("/",(req,res)=>{
    res.send(`<h1>backend runing on port no${PORT} <h1/>`);
})