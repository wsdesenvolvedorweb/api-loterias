const mongoose = require("mongoose")

const quinaSchema = new mongoose.Schema({
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
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Quina", quinaSchema)