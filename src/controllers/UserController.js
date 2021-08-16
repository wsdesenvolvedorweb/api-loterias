const User = require("../models/User")
const registerValidation = require("../models/validations/registerValidation")
const loginValidation = require("../models/validations/loginValidation")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

module.exports = {
    async login(request, response, next) {
        try {
            const { email, password } = request.body
            const { error } = loginValidation.validate(request.body)
            if(error) {
                return response.status(400).json({ error, errorMessage: "Campos de preenchimento obrigatório!" })
            }
            const user = await User.findOne({ email })
            if(!user) {
                return response.status(400).json({ errorMessage: "E-mail inválido!" })
            }
            const validatePassword = await bcrypt.compare(password, user.password)
            if(!validatePassword) {
                return response.status(400).json({ errorMessage: "Senha inválida!" })
            }
            const token = jwt.sign({
                _id: user._id,
                name: user.name
            }, process.env.TOKEN_SECRET)
            response.header("auth-token", token)
            return response.status(201).json({ token, success: "Login efetuado com sucesso!" })
        } catch(error) {
            next(error)
        }
    },
    async register(request, response, next) {
        try {
            const { name, email, password } = request.body
            const salt = await bcrypt.genSalt(18)
            const encryptedPassword = await bcrypt.hash(password, salt)
            const user = new User({
                name,
                email,
                password: encryptedPassword
            })
            const { error } = registerValidation.validate(request.body)
            if(error) {
                return response.status(400).json({ error, errorMessage: "Campos de preenchimento obrigatório!" })
            }
            const emailExists = await User.findOne({ email })
            if(emailExists) {
                return response.status(400).json({ errorMessage: "O e-mail informado já existe em nossa base de dados!" })
            }
            const savedUser = await user.save()
            return response.status(201).json({ savedUser, success: "Usuário cadastrado com sucesso!" })
        } catch(error) {
            next(error)
        }
    }
}