const Lotofacil = require("../models/Lotofacil")
const lotofacilValidation = require("../models/validations/lotofacilValidation")

module.exports = {
    async countGameLotofacil(request, response, next) {
        try {
            const qttGameLotofacil = await Lotofacil.countDocuments()
            return response.json({ qttGameLotofacil })
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
                numberFifteen
            } = request.body
            const { error } = lotofacilValidation.validate(request.body)
            if(error) {
                return response.status(400).json({ error, errorMessage: "Campos de preenchimento obrigatório!" })
            }
            const verifyGame = await Lotofacil.findOne({
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
                numberFifteen
            })
            if(!verifyGame) {
                return response.status(404).json({ errorMessage: "Não existe jogo da lotofácil com os números informados!" })
            }
            return response.status(200).json({ verifyGame })
        } catch(error) {
            next(error)
        }
    },
    async getById(request, response, next) {
        try {
            const { _id } = request.params
            const game = await Lotofacil.findById(_id)
            if(!_id) {
                return response.status(404).json({ errorMessage: "É obrigatório informar o código do jogo da lotofácil!" })
            }
            if(!game) {
                return response.status(404).json({ errorMessage: "Não existe jogo da lotofácil a ser excluído com o código informado!" })
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
                numberFifteen
            } = request.body
            const { error } = lotofacilValidation.validate(request.body)
            const lotofacil = new Lotofacil({
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
                numberFifteen
            })
            if(error) {
                return response.status(400).json({ error, errorMessage: "Campos de preenchimento obrigatório!" })
            }
            const verifyGame = await Lotofacil.findOne({
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
                numberFifteen
            })
            if(verifyGame) {
                return response.status(400).json({ errorMessage: "Jogo da lotofácil já foi cadastrado com esses números!" })
            }
            const savedGame = await lotofacil.save()
            return response.status(201).json({ savedGame, success: "Jogo da lotofácil cadastrado com sucesso!" })
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
                numberFifteen
            } = request.body
            const game = await Lotofacil.find({
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
                numberFifteen
            })
            const { error } = lotofacilValidation.validate(request.body)
            if(error) {
                return response.status(400).json({ error, errorMessage: "Campos de preenchimento obrigatório!" })
            }
            if(!_id) {
                return response.status(404).json({ errorMessage: "Não existe jogo da lotofácil com o código informado!" })
            }
            if(!game) {
                return response.status(404).json({ errorMessage: "Não existe jogo da lotofácil com os números informados!" })
            }
            await Lotofacil.updateOne({
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
                numberFifteen
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
                return response.status(404).json({ errorMessage: "Não existe jogo da lotofácil com o código informado!" })
            }
            await Lotofacil.findByIdAndDelete(_id)
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
                numberFifteen
            } = request.body
            const { error } = lotofacilValidation.validate(request.body)
            if(error) {
                return response.status(400).json({ error, errorMessage: "Campos de preenchimento obrigatório!" })
            }
            const game = await Lotofacil.findOne({
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
                numberFifteen
            })
            if(!game) {
                return request.status(404).json({ errorMessage: "Não existe jogo da lotofácil com os números informados!" })
            }
            await Lotofacil.deleteOne({
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
                numberFifteen
            })
            return response.status(200).json({ success: "Jogo excluído com sucesso!"})
        } catch(error) {
            next(error)
        }
    }
}