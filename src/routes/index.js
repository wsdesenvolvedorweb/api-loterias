const express = require("express")
const UserController = require("../controllers/UserController")
const QuinaController = require("../controllers/QuinaController")
const MegaSenaController = require("../controllers/MegaSenaController")
const LuckyDayController = require("../controllers/LuckyDayController")
const LotomaniaController = require("../controllers/LotomaniaController")
const LotofacilController = require("../controllers/LotofacilController")
const auth = require("../middlewares/auth")
const app = express.Router()

//rotas de login e de cadastro de usuários
app.post("/login", UserController.login)
    .post("/register", UserController.register)

//rotas do jogo da Quina
    .get("/countGameQuina", auth, QuinaController.countGameQuina)
    .get("/quina", auth, QuinaController.getByNumbers)
    .get("/quinaById/:_id", auth, QuinaController.getById)
    .post("/quina", auth, QuinaController.create)
    .put("/quina/:_id", auth, QuinaController.update)
    .delete("/quinaById/:_id", auth, QuinaController.deleteById)
    .delete("/quinaByGame", auth, QuinaController.deleteByGame)

//rotas do jogo da MegaSena
    .get("/countGameMegasena", auth, MegaSenaController.countGameMegaSena)
    .get("/megasena", auth, MegaSenaController.getByNumbers)
    .get("/megasenaById/:_id", auth, MegaSenaController.getById)
    .post("/megasena", auth, MegaSenaController.create)
    .put("/megasena/:_id", auth, MegaSenaController.update)
    .delete("/megasenaById/:_id", auth, MegaSenaController.deleteById)
    .delete("/megasenaByGame", auth, MegaSenaController.deleteByGame)

//rotas do jogo do dia de sorte
    .get("/countGameLuckyDay", auth, LuckyDayController.countGameLuckyDay)
    .get("/luckyDay", auth, LuckyDayController.getByNumbers)
    .get("/luckyDayById/:_id", auth, LuckyDayController.getById)
    .post("/luckyDay", auth, LuckyDayController.create)
    .put("/luckyDay/:_id", auth, LuckyDayController.update)
    .delete("/luckyDayById/:_id", auth, LuckyDayController.deleteById)
    .delete("/luckyDayByGame", auth, LuckyDayController.deleteByGame)

//rotas do jogo da lotomania
    .get("/countGameLotomania", auth, LotomaniaController.countGameLotomania)
    .get("/lotomania", auth, LotomaniaController.getByNumbers)
    .get("/lotomaniaById/:_id", auth, LotomaniaController.getById)
    .post("/lotomania", auth, LotomaniaController.create)
    .put("/lotomania/:_id", auth, LotomaniaController.update)
    .delete("/lotomaniaById/:_id", auth, LotomaniaController.deleteById)
    .delete("/lotomaniaByGame", auth, LotomaniaController.deleteByGame)

//rotas do jogo da lotofácil
    .get("/countGameLotofacil", auth, LotofacilController.countGameLotofacil)
    .get("/lotofacil", auth, LotofacilController.getByNumbers)
    .get("/lotofacilById/:_id", auth, LotofacilController.getById)
    .post("/lotofacil", auth, LotofacilController.create)
    .put("/lotofacil/:_id", auth, LotofacilController.update)
    .delete("/lotofacilById/:_id", auth, LotofacilController.deleteById)
    .delete("/lotofacilByGame", auth, LotofacilController.deleteByGame)

module.exports = app