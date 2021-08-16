const LuckyDay = require("../models/LuckyDay")
const luckydayValidation = require("../models/validations/luckydayValidation")

module.exports = {
    async countGameLuckyDay(request, response, next) {
        try {
            const qttGameLuckyDay = await LuckyDay.countDocuments()
            return response.json({ qttGameLuckyDay })
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
                monthOfLuck 
            } = request.body
            const { error } = luckydayValidation.validate(request.body)
            if(error) {
                return response.status(400).json({ error, errorMessage: "Campos de preenchimento obrigatório!" })
            }
            const verifyGame = await LuckyDay.findOne({
                numberOne,
                numberTwo,
                numberThree,
                numberFour,
                numberFive,
                numberSix,
                numberSeven,
                monthOfLuck
            })
            if(!verifyGame) {
                return response.status(400).json({ errorMessage: "Não existe jogo do dia da sorte com os números informados!" })
            }
            return response.status(200).json({ verifyGame })
        } catch(error) {
            next(error)
        }
    },
    async getById(request, response, next) {
        try {
            const { _id } = request.params
            const game = await LuckyDay.findById(_id)
            if(!_id) {
                return response.status(404).json({ errorMessage: "É obrigatório informar o código do jogo do dia de sorte!" })
            }
            if(!game) {
                return response.status(404).json({ errorMessage: "Não existe jogo do dia de sorte com o código informado!" })
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
                monthOfLuck 
            } = request.body
            const luckyDay = new LuckyDay({
                numberOne,
                numberTwo,
                numberThree,
                numberFour,
                numberFive,
                numberSix,
                numberSeven,
                monthOfLuck
            })
            const { error } = luckydayValidation.validate(request.body)
            if(error) {
                return request.status(400).json({ error, errorMessage: "Campos de preenchimento obrigatório!" })
            }
            const verifyGame = await LuckyDay.findOne({
                numberOne,
                numberTwo,
                numberThree,
                numberFour,
                numberFive,
                numberSix,
                numberSeven,
                monthOfLuck
            })
            if(verifyGame) {
                return request.status(400).json({ errorMessage: "Jogo do mês da sorte já existe com os números informados!" })
            }
            const savedGame = await luckyDay.save()
            return response.status(201).json({ savedGame, success: "Jogo cadastrado com sucesso!" })
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
                monthOfLuck 
            } = request.body
            const { error } = luckydayValidation.validate(request.body)
            const game = await LuckyDay.findOne({
                numberOne,
                numberTwo,
                numberThree,
                numberFour,
                numberFive,
                numberSix,
                numberSeven,
                monthOfLuck
            })
            if(error) {
                return response.status(400).json({ error, errorMessage: "Campos de preenchimento obrigatório!" })
            }
            if(!_id) {
                return response.status(404).json({ errorMessage: "Não existe jogo do dia da sorte com o número informado!" })
            }
            if(!game) {
                return response.status(404).json({ errorMessage: "Não existe jogo a ser excluído com os números informados!" })
            }
            await LuckyDay.updateOne({
                numberOne,
                numberTwo,
                numberThree,
                numberFour,
                numberFive,
                numberSix,
                numberSeven,
                monthOfLuck
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
                return response.status(404).json({ errorMessage: "Não existe jogo do dia de sorte com o código informado!" })
            }
            await LuckyDay.findByIdAndDelete(_id)
            return response.status(200).json({ success: "Jogo excluído com sucesso!" })
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
                monthOfLuck
            } = request.body
            const { error } = luckydayValidation.validate(request.body)
            if(error) {
                return response.status(400).json({ error, errorMessage: "Campos de preenchimento obrigatório!" })
            }
            const game = LuckyDay.findOne({
                numberOne,
                numberTwo,
                numberThree,
                numberFour,
                numberFive,
                numberSix,
                numberSeven,
                monthOfLuck
            })
            if(!game) {
                return response.status(404).json({ errorMessage: "Não existe jogo do dia de sorte com os números informados!" })
            }
            await LuckyDay.deleteOne({
                numberOne,
                numberTwo,
                numberThree,
                numberFour,
                numberFive,
                numberSix,
                numberSeven,
                monthOfLuck
            })
            return response.status(200).json({ success: "Jogo excluído com sucesso!" })
        } catch(error) {
            next(error)
        }
    }
}