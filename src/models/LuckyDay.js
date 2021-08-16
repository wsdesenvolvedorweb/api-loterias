const mongoose = require("mongoose")

const luckyDaySchema = new mongoose.Schema({
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
        required: true,
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
    monthOfLuck: {
        type: String,
        required: true,
        max: 30
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("LuckyDay", luckyDaySchema)