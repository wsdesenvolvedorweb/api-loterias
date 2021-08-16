const mongoose = require("mongoose")
require("dotenv/config")

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: process.env.DATABASE_NAME
}).then(() => {
    console.log("Banco de dados mongoDB conectado com sucesso!")
}).catch((error) => {
    console.log(`Erro ao conectar com o banco de dados: ${error}`)
})

module.exports = mongoose