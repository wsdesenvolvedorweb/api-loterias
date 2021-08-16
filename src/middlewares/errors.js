const express = require("express")
const app = express()

app.use((request, response, next) => {
    const error = new Error("Recurso não encontrado!")
    error.status = 404
    next()
})

app.use((error, request, response, next) => {
    response.status(error.status || 500)
    response.json({ error: error.message })
})

module.exports = app