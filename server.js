const express = require('express');
const app = express();

require('dotenv').config();
app.use(express.json());

const dbConfig = require('./config/dbConfig');

const userRoute = require('./routes/userRoutes');


app.use('/api/user', userRoute);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>{
    console.log(`Server running on port http://localhost:${PORT}`);
})