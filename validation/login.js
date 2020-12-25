const Joi = require('@hapi/joi')

const login_validation = body => {
    const schema = Joi.object({
        username: Joi.string().min(3).required(),
        password: Joi.string().required()
    })
    return schema.validate(body)
}
module.exports.login_validation = login_validation
