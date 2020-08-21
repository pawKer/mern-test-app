const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established succesfully.")
});




const app = express();
const port = process.env.PORT || 5432;

app.use(cors());
app.use(express.json());

const userRouter = require('./routes/users');
const exerciseRouter = require('./routes/exercises');

app.use('/users', userRouter);
app.use('/exercises', exerciseRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});