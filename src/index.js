const express = require("express")
const helmet = require("helmet")
const morgan = require("morgan")
const cors = require("cors")
const errors = require("./middlewares/errors")
const routes = require("./routes")
require("dotenv/config")
require("./config/database")
const port = process.env.PORT || 3000
const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
app.use(routes)
app.use(helmet())
app.use(errors)

app.listen(port, () => {
    console.log("servidor em execução!".toUpperCase())
})