const Quina = require("../models/Quina")
const quinaValidation = require("../models/validations/quinaValidation")

module.exports = {
    async countGameQuina(request, response, next) {
        try {
            const qttGameQuina = await Quina.countDocuments()
            return response.json({ qttGameQuina })
        } catch(error) {
            next(error)
        }
    },
    async getByNumbers(request, response, next) {
        try {
            const { numberOne, numberTwo, numberThree, numberFour, numberFive } = request.body
            const { error } = quinaValidation.validate(request.body)
            if(error) {
                return response.status(400).json({ error, message: "Campos de preenchimento obrigatório!" })
            }
            const verifyQuina = await Quina.findOne({ numberOne, numberTwo, numberThree, numberFour, numberFive })
            if(!verifyQuina) {
                return response.status(400).json({ message: "Não existe um jogo da quina cadastrado com os números informados" })
            }
            return response.status(201).json({ verifyQuina })
        } catch(error) {
            next(error)
        }
    },
    async getById(request, response, next) {
        try {
            const { _id } = request.params
            const game = await Quina.findById(_id)
            if(!_id) {
                return response.status(404).json({ message: "É obrigatório informar o código do jogo da Quina!" })
            }
            if(!game) {
                return response.status(404).json({ message: "Não existe jogo da Quina cadastrado com o código informado!" })
            }
            return response.status(200).json({ game })
        } catch(error) {
            next(error)
        }
    },
    async create(request, response, next) {
        try {
            const { numberOne, numberTwo, numberThree, numberFour, numberFive } = request.body
            const quina = new Quina({
                numberOne,
                numberTwo,
                numberThree,
                numberFour,
                numberFive
            })
            const { error } = quinaValidation.validate(request.body)
            if(error) {
                return response.status(400).json({ error, message: "Campos de preenchimento obrigatório!" })
            }
            const verifyQuina = await Quina.findOne({ numberOne, numberTwo, numberThree, numberFour, numberFive })
            if(verifyQuina) {
                return response.status(400).json({ errorMessage: "Jogo da quina já existe com esses números!" })
            }
            const savedQuina = await quina.save()
            return response.status(201).json({ savedQuina, success: "Jogo cadastrado com sucesso!" })
        } catch(error) {
            next(error)
        }
    },
    async update(request, response, next) {
        try {
            const { _id } = request.params
            const { numberOne, numberTwo, numberThree, numberFour, numberFive } = request.body
            const { error } = quinaValidation.validate(request.body)
            const game = await Quina.findOne({ numberOne, numberTwo, numberThree, numberFour, numberFive })
            if(error) {
                return response.status(400).json({error, errorMessage: "Campos de preenchimento obrigatório!"})
            }
            if(!_id) {
                return response.status(404).json({ error, errorMessage: "Não existe jogo da quina com o código informado!" })
            }
            await Quina.updateOne({
                numberOne,
                numberTwo,
                numberThree,
                numberFour,
                numberFive
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
                return response.status(404).json({ errorMessage: "Não existe jogo da quina com o código informado!" })
            }
            await Quina.findByIdAndDelete(_id)
            return response.status(200).json({ success: "Jogo excluído com sucesso!" })
        } catch(error) {
            next(error)
        }
    },
    async deleteByGame(request, response, next) {
        try {
            const { numberOne, numberTwo, numberThree, numberFour, numberFive } = request.body
            const { error } = quinaValidation.validate(request.body)
            if(error) {
                return response.status(400).json({ error, errorMessage: "Campos de preenchimento obrigatório!" })
            }
            const game = await Quina.findOne({
                numberOne,
                numberTwo,
                numberThree,
                numberFour,
                numberFive
            })
            if(!game) {
                return response.status(404).json({ errorMessage: "Não existe jogo a ser excluído com os números informados!" })
            }
            await Quina.deleteOne({
                numberOne,
                numberTwo,
                numberThree,
                numberFour,
                numberFive
            })
            return response.status(200).json({ success: "Jogo da quina excluído com sucesso!" })
        } catch(error) {
            next(error)
        }
    }
}