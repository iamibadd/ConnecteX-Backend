require('dotenv/config')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const signupRoutes = require('./routes/signup')
mongoose.connect(process.env.DB_CONNECTION,
    {useUnifiedTopology: true, useNewUrlParser: true}, (err, client) => {
        if (err) return console.log(err)
        // console.log('Connected to db')
    })
app.use(express.json())
app.use('/register', signupRoutes)
app.listen(5000)
