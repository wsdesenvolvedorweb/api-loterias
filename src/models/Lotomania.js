const mongoose = require("mongoose")

const lotomaniaSchema = new mongoose.Schema({
    numberOne: {
        type: Number,
        required: true
    },
    numberTwo: {
        type: Number,
        required: true
    },
    numberThree: {
        type: Number,
        required: true
    },
    numberFour: {
        type: Number,
        required: true
    },
    numberFive: {
        type: Number,
        required: true
    },
    numberSix: {
        type: Number,
        required: true
    },
    numberSeven: {
        type: Number,
        required: true
    },
    numberEight: {
        type: Number,
        required: true
    },
    numberNine: {
        type: Number,
        required: true
    },
    numberTen: {
        type: Number,
        required: true
    },
    numberEleven: {
        type: Number,
        required: true
    },
    numberTwelve: {
        type: Number,
        required: true
    },
    numberThirteen: {
        type: Number,
        required: true
    },
    numberFourteen: {
        type: Number,
        required: true
    },
    numberFifteen: {
        type: Number,
        required: true
    },
    numberSixteen: {
        type: Number,
        required: true
    },
    numberSeventeen: {
        type: Number,
        required: true
    },
    numberEighteen: {
        type: Number,
        required: true
    },
    numberNineteen: {
        type: Number,
        required: true
    },
    numberTwenty: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("Lotomania", lotomaniaSchema)