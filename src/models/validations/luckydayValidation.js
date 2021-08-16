const Joi = require("@hapi/joi")

const luckydayValidation = Joi.object({
    numberOne: Joi.number().required(),
    numberTwo: Joi.number().required(),
    numberThree: Joi.number().required(),
    numberFour: Joi.number().required(),
    numberFive: Joi.number().required(),
    numberSix: Joi.number().required(),
    numberSeven: Joi.number().required(),
    monthOfLuck: Joi.string().max(30).required()
})

module.exports = luckydayValidation