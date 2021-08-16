const Joi = require("@hapi/joi")

const megasenaValidation = Joi.object({
    numberOne: Joi.number().required(),
    numberTwo: Joi.number().required(),
    numberThree: Joi.number().required(),
    numberFour: Joi.number().required(),
    numberFive: Joi.number().required(),
    numberSix: Joi.number().required()
})

module.exports = megasenaValidation