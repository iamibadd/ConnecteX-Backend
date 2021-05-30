const Joi = require('@hapi/joi')

const login_validation = body => {
    const schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required()
    })
    return schema.validate(body)
}
module.exports.login_validation = login_validation
