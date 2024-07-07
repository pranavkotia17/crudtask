const express = require('express');
const app = express();
app.use(express.json());
const apiRouter = require('./router/router');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/clientserver')

app.use('/api', apiRouter);
app.listen(5000, ()=>{
    console.log("server running on port 5000")
})