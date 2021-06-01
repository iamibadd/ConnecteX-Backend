require('dotenv/config')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routes = require('./src/routes');
mongoose.connect(process.env.DB_CONNECTION,
	{useUnifiedTopology: true, useNewUrlParser: true}, (err, client) => {
		if (err) return console.log(err)
		console.log('Connected to db')
	})
app.use(express.json())
app.use('/', routes)
app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`))
