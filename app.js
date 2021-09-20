require('dotenv/config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./src/routes');
const cors = require('cors');
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./src/docs/swagger-config.yml');
const swaggerSpecs = require('./src/config/swagger');
mongoose.connect(process.env.DB_CONNECTION,
	{useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false}, (err, client) => {
		if (err) return console.log(err);
		console.log('Connected to db');
	})
app.use(express.json());
app.use(cors('*'));
app.use('/', routes);
app.use('/health', (req, res) => {
	res.send('Server is healthy!!');
});
app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecs)); // swagger loaded by js file
// app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument)); //swagger loaded by yml file
app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));
