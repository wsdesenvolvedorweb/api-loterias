const Joi = require("@hapi/joi")

const lotomaniaValidation = Joi.object({
    numberOne: Joi.number().required(),
    numberTwo: Joi.number().required(),
    numberThree: Joi.number().required(),
    numberFour: Joi.number().required(),
    numberFive: Joi.number().required(),
    numberSix: Joi.number().required(),
    numberSeven: Joi.number().required(),
    numberEight: Joi.number().required(),
    numberNine: Joi.number().required(),
    numberTen: Joi.number().required(),
    numberEleven: Joi.number().required(),
    numberTwelve: Joi.number().required(),
    numberThirteen: Joi.number().required(),
    numberFourteen: Joi.number().required(),
    numberFifteen: Joi.number().required(),
    numberSixteen: Joi.number().required(),
    numberSeventeen: Joi.number().required(),
    numberEighteen: Joi.number().required(),
    numberNineteen: Joi.number().required(),
    numberTwenty: Joi.number().required()
})

module.exports = lotomaniaValidation