const express = require('express');
const morgan = require('morgan');
const app = express();

require('dotenv').config();
app.use(express.json());

const dbConfig = require('./config/dbConfig');
const userRoute = require('./routes/userRoutes');


// log-request
app.use(morgan('dev'));


app.use('/api/user', userRoute);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>{
    console.log(`Server running on port http://localhost:${PORT}`);
})