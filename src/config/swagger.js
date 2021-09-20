const swaggerJsDoc = require('swagger-jsdoc');
const swaggerDefinition = require('../docs/swagger-config');
const options = {
	swaggerDefinition,
	apis: ['./src/routes/index'],
};

const swaggerSpecs = swaggerJsDoc(options);

module.exports = swaggerSpecs;