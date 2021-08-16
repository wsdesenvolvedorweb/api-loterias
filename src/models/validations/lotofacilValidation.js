const Joi = require("@hapi/joi")

const lotofacilValidation = Joi.object({
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
    numberFifteen: Joi.number().required()
})

module.exports = lotofacilValidation