const jwt = require("jsonwebtoken")

module.exports = (request, response, next) => {
    try {
        const token = request.header("auth-token")
        if(!token) {
            return response.status(401).json({ errorMessage: "Usuário não autorizado!" })
        }
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        request.user = verified
        next()
    } catch(error) {
        return response.status(400).json({ errorMessage: "Token inválido!" })
    }
}