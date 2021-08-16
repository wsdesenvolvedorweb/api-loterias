const Lotomania = require("../models/Lotomania")
const lotomaniaValidation = require("../models/validations/lotomaniaValidation")

module.exports = {
    async countGameLotomania(request, response, next) {
        try {
            const qttGameLotomania = await Lotomania.countDocuments()
            return response.json({ qttGameLotomania })
        } catch(error) {
            next(error)
        }
    },
    async getByNumbers(request, response, next) {
        try {
            const {
                numberOne,
                numberTwo,
                numberThree,
                numberFour,
                numberFive,
                numberSix,
                numberSeven,
                numberEight,
                numberNine,
                numberTen,
                numberEleven,
                numberTwelve,
                numberThirteen,
                numberFourteen,
                numberFifteen,
                numberSixteen,
                numberSeventeen,
                numberEighteen,
                numberNineteen,
                numberTwenty
            } = request.body
            const { error } = lotomaniaValidation.validate(request.body)
            if(error) {
                return response.send(400).json({ error, errorMessage: "Campos de preenchimento obrigatório!" })
            }
            const verifyGame = await Lotomania.findOne({
                numberOne,
                numberTwo,
                numberThree,
                numberFour,
                numberFive,
                numberSix,
                numberSeven,
                numberEight,
                numberNine,
                numberTen,
                numberEleven,
                numberTwelve,
                numberThirteen,
                numberFourteen,
                numberFifteen,
                numberSixteen,
                numberSeventeen,
                numberEighteen,
                numberNineteen,
                numberTwenty
            })
            if(!verifyGame) {
                return response.status(400).json({ errorMessage: "Não existe jogo da lotomania com os números informados!" })
            }
            return response.status(200).json({ verifyGame })
        } catch(error) {
            next(error)
        }
    },
    async getById(request, response, next) {
        try {
            const { _id } = request.params
            const game = await Lotomania.findById(_id)
            if(!_id) {
                return response.status(404).json({ errorMessage: "É obrigatório informar o código do jogo da lotomania!" })
            }
            if(!game) {
                return response.status(404).json({ errorMessage: "Não existe jogo da lotomania com o código informado!" })
            }
            return response.status(200).json({ game })
        } catch(error) {
            next(error)
        }
    },
    async create(request, response, next) {
        try {
            const { 
                numberOne,
                numberTwo,
                numberThree,
                numberFour,
                numberFive,
                numberSix,
                numberSeven,
                numberEight,
                numberNine,
                numberTen,
                numberEleven,
                numberTwelve,
                numberThirteen,
                numberFourteen,
                numberFifteen,
                numberSixteen,
                numberSeventeen,
                numberEighteen,
                numberNineteen,
                numberTwenty
            } = request.body
            const lotomania = new Lotomania({
                numberOne,
                numberTwo,
                numberThree,
                numberFour,
                numberFive,
                numberSix,
                numberSeven,
                numberEight,
                numberNine,
                numberTen,
                numberEleven,
                numberTwelve,
                numberThirteen,
                numberFourteen,
                numberFifteen,
                numberSixteen,
                numberSeventeen,
                numberEighteen,
                numberNineteen,
                numberTwenty
            })
            const { error } = lotomaniaValidation.validate(request.body)
            if(error) {
                return response.status(400).json({ error, errorMessage: "Campos de preenchimento obrigatório!" })
            }
            const verifyGame = await Lotomania.findOne({
                numberOne,
                numberTwo,
                numberThree,
                numberFour,
                numberFive,
                numberSix,
                numberSeven,
                numberEight,
                numberNine,
                numberTen,
                numberEleven,
                numberTwelve,
                numberThirteen,
                numberFourteen,
                numberFifteen,
                numberSixteen,
                numberSeventeen,
                numberEighteen,
                numberNineteen,
                numberTwenty
            })
            if(verifyGame) {
                return response.status(400).json({ errorMessage: "Jogo da Lotomania já foi cadastrado com esses números!" })
            }
            const savedGame = await lotomania.save()
            return response.status(201).json({ savedGame, message: "Jogo da Lotomania cadastrado com sucesso!" })
        } catch(error) {
            next(error)
        }
    },
    async update(request, response, next) {
        try {
            const { _id } = request.params
            const {
                numberOne,
                numberTwo,
                numberThree,
                numberFour,
                numberFive,
                numberSix,
                numberSeven,
                numberEight,
                numberNine,
                numberTen,
                numberEleven,
                numberTwelve,
                numberThirteen,
                numberFourteen,
                numberFifteen,
                numberSixteen,
                numberSeventeen,
                numberEighteen,
                numberNineteen,
                numberTwenty
            } = request.body
            const { error } = lotomaniaValidation.validate(request.body)
            const game = await Lotomania.findOne({
                numberOne,
                numberTwo,
                numberThree,
                numberFour,
                numberFive,
                numberSix,
                numberSeven,
                numberEight,
                numberNine,
                numberTen,
                numberEleven,
                numberTwelve,
                numberThirteen,
                numberFourteen,
                numberFifteen,
                numberSixteen,
                numberSeventeen,
                numberEighteen,
                numberNineteen,
                numberTwenty
            })
            if(error) {
                return response.status(400).json({ error, errorMessage: "Campos de preenchimento obrigatório!" })
            }
            if(!_id) {
                return response.status(404).json({ errorMessage: "Não existe jogo da lotomania com o código informado!" })
            }
            if(!game) {
                return response.status(404).json({ errorMessage: "Não existe jogo da lotomania com os números informados!" })
            }
            await Lotomania.updateOne({
                numberOne,
                numberTwo,
                numberThree,
                numberFour,
                numberFive,
                numberSix,
                numberSeven,
                numberEight,
                numberNine,
                numberTen,
                numberEleven,
                numberTwelve,
                numberThirteen,
                numberFourteen,
                numberFifteen,
                numberSixteen,
                numberSeventeen,
                numberEighteen,
                numberNineteen,
                numberTwenty
            }).where(_id)
            return response.status(201).json({ game, success: "Jogo atualizado com sucesso!" })
        } catch(error) {
            next(error)
        }
    },
    async deleteById(request, response, next) {
        try {
            const { _id } = request.params
            if(!_id) {
                return response.status(404).json({ errorMessage: "Não existe jogo da lotomania com o código informado!" })
            }
            await Lotomania.findByIdAndDelete(_id)
            return response.status(200).json({ message: "Jogo excluído com sucesso!" })
        } catch(error) {
            next(error)
        }
    },
    async deleteByGame(request, response, next) {
        try {
            const {
                numberOne,
                numberTwo,
                numberThree,
                numberFour,
                numberFive,
                numberSix,
                numberSeven,
                numberEight,
                numberNine,
                numberTen,
                numberEleven,
                numberTwelve,
                numberThirteen,
                numberFourteen,
                numberFifteen,
                numberSixteen,
                numberSeventeen,
                numberEighteen,
                numberNineteen,
                numberTwenty
            } = request.body
            const { error } = lotomaniaValidation.validate(request.body)
            if(error) {
                return response.status(400).json({ error, errorMessage: "Campos de preenchimento obrigatório!" })
            }
            const game = await Lotomania.findOne({
                numberOne,
                numberTwo,
                numberThree,
                numberFour,
                numberFive,
                numberSix,
                numberSeven,
                numberEight,
                numberNine,
                numberTen,
                numberEleven,
                numberTwelve,
                numberThirteen,
                numberFourteen,
                numberFifteen,
                numberSixteen,
                numberSeventeen,
                numberEighteen,
                numberNineteen,
                numberTwenty
            })
            if(!game) {
                return response.status(400).json({ errorMessage: "Não existe jogo da lotomania com os números informados!" })
            }
            await Lotomania.deleteOne({
                numberOne,
                numberTwo,
                numberThree,
                numberFour,
                numberFive,
                numberSix,
                numberSeven,
                numberEight,
                numberNine,
                numberTen,
                numberEleven,
                numberTwelve,
                numberThirteen,
                numberFourteen,
                numberFifteen,
                numberSixteen,
                numberSeventeen,
                numberEighteen,
                numberNineteen,
                numberTwenty
            })
            return response.status(200).json({ success: "Jogo excluído com sucesso!" })
        } catch(error) {
            next(error)
        }
    }
}