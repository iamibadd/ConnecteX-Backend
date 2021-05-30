const Joi = require('@hapi/joi')

const signup_validation = body => {
    const schema = Joi.object({
        first_name: Joi.string().min(3).required(),
        last_name: Joi.string().min(3).required(),
        username: Joi.string().min(3).required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        confirm_password: Joi.any().equal(Joi.ref('password')).required().options({messages: {'any.only': 'Passwords must match!'}})
    })
    return schema.validate(body)
}
module.exports.signup_validation = signup_validation
