const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
require('dotenv/config')
const app = express();

app.use(bodyParser.json())

//Import Routes
const postsRoute = require('./routes/posts')

app.use('/posts', postsRoute)

//Routes
app.get('/', (req, res) => {
    res.send('We are on Home');
})



// connect to DB
mongoose.connect('mongodb://localhost:27017/tasks', { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('connected to DB!'))

//listning to the server
app.listen(5000)