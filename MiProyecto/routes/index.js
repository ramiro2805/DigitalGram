const express = require("express");
const router = express.Router();

const controller = require("../controllers/indexController");

router.get('/', controller.index);
router.get('/resultados', controller.resultados)
router.get('/register', controller.register)
router.post('/register/store',controller.registerPost)
router.get('/login', controller.login)
router.post('/login/store',controller.loginPost)
router.post('/',controller.logout)
router.get("/resultadosUsuarios", controller.resultadosUsuarios)
module.exports = router
