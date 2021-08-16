const Joi = require("@hapi/joi")

const registerValidation = Joi.object({
    name: Joi.string().max(255).required(),
    email: Joi.string().min(6).max(255).required(),
    password: Joi.string().min(6).max(255).required()
})

module.exports = registerValidation