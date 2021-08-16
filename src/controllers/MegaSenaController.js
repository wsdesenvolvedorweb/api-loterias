const MegaSena = require("../models/MegaSena")
const megasenaValidation = require("../models/validations/megasenaValidation")

module.exports = {
    async countGameMegaSena(request, response, next) {
        try {
            const qttGameMegaSena = await MegaSena.countDocuments()
            return response.json({ qttGameMegaSena })
        } catch(error) {
            next(error)
        }
    },
    async getByNumbers(request, response, next) {
        try {
            const { numberOne, numberTwo, numberThree, numberFour, numberFive, numberSix } = request.body
            const { error } = megasenaValidation.validate(request.body)
            if(error) {
                return response.status(400).json({ error, message: "Campos de preenchimento obrigatório!" })
            }
            const verifyMegaSena = await MegaSena.findOne({ 
                numberOne, 
                numberTwo, 
                numberThree, 
                numberFour, 
                numberFive, 
                numberSix
            })
            if(!verifyMegaSena) {
                return response.status(400).json({ message: "Não existe um jogo da MegaSena cadastrado com os números informados!" })
            }
            return response.status(200).json({ verifyMegaSena })
        } catch(error) {
            next(error)
        }
    },
    async getById(request, response, next) {
        try {
            const { _id } = request.params
            const game = await MegaSena.findById(_id)
            if(!_id) {
                return response.status(404).json({ message: "É obrigatório informar o código do jogo da MegaSena!" })
            }
            if(!game) {
                return response.status(404).json({ message: "Não existe jogo da MegaSena com o código informado!" })
            }
            return response.status(200).json({ game })
        } catch(error) {
            next(error)
        }
    },
    async create(request, response, next) {
        try {
            const { numberOne, numberTwo, numberThree, numberFour, numberFive, numberSix } = request.body
            const megasena = new MegaSena({
                numberOne,
                numberTwo,
                numberThree,
                numberFour,
                numberFive,
                numberSix
            })
            const { error } = megasenaValidation.validate(request.body)
            if(error) {
                return response.status(400).json({ error, errorMessage: "Campos de preenchimento obrigatório!" })
            }
            const verifyMegaSena = await MegaSena.findOne({
                numberOne,
                numberTwo,
                numberThree,
                numberFour,
                numberFive,
                numberSix
            })
            if(verifyMegaSena) {
                return response.status(400).json({ errorMessage: "Jogo da MegaSena já existe com os números informados!" })
            }
            const savedMegaSena = await megasena.save()
            return response.status(201).json({ savedMegaSena, success: "Jogo da MegaSena cadastrado com sucesso!" })
        } catch(error) {
            next(error)
        }
    },
    async update(request, response, next) {
        try {
            const { _id } = request.params
            const { numberOne, numberTwo, numberThree, numberFour, numberFive, numberSix } = request.body
            const { error } = megasenaValidation.validate(request.body)
            const game = await MegaSena.findOne({ 
                numberOne, 
                numberTwo, 
                numberThree, 
                numberFour, 
                numberFive, 
                numberSix
            })
            if(error) {
                return response.status(400).json({ error, errorMessage: "Campos de preenchimento obrigatório!" })
            }
            if(!_id) {
                return response.status(404).json({ error, errorMessage: "Não existe jogo da MegaSena com o código informado!" })
            }
            if(!game) {
                return response.status(404).json({ errorMessage: "Não existe jogo a ser atualizado com os números informados!" })
            }
            await MegaSena.updateOne({
                numberOne,
                numberTwo,
                numberThree,
                numberFour,
                numberFive,
                numberSix
            }).where(_id)
            return response.status(200).json({ game, success: "Jogo atualizado com sucesso!" })
        } catch(error) {
            next(error)
        }
    },
    async deleteById(request, response, next) {
        try {
            const { _id } = request.params
            if(!_id) {
                return response.status(400).json({ errorMessage: "Não existe jogo da MegaSena com o código informado" })
            }
            await MegaSena.findByIdAndDelete(_id)
            return response.status(200).json({ message: "Jogo excluído com sucesso!" })
        } catch(error) {
            next(error)
        }
    },
    async deleteByGame(request, response, next) {
        try {
            const { numberOne, numberTwo, numberThree, numberFour, numberFive, numberSix } = request.body
            const { error } = megasenaValidation.validate(request.body)
            if(error) {
                return response.status(400).json({ error, errorMessage: "Campos de preenchimento obrigatório!" })
            }
            const game = await MegaSena.findOne({
                numberOne,
                numberTwo,
                numberThree,
                numberFour,
                numberFive,
                numberSix
            })
            if(!game) {
                return response.status(400).json({ error, errorMessage: "Não existe jogo a ser excluído com os números informados!"})
            }
            await MegaSena.deleteOne({
                numberOne,
                numberTwo,
                numberThree,
                numberFour,
                numberFive,
                numberSix
            })
            return response.status(200).json({ success: "Jogo da mega-sena excluído com sucesso!"} )
        } catch(error) {
            next(error)
        }
    }
}