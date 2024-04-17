const express = require("express");
const router = express.Router();

const controller = require("../controllers/posteosController");

router.get('/detallePost/id/:id', controller.detallePost)
router.get('/agregarPost', controller.agregarPost)
router.post('/agregarPost/procesar',controller.procesarPost)
router.post('/borrarPost/id/:id',controller.borrar)
router.post('/editarPost/id/:id',controller.editarPost)
router.post('/agregarCom/id/:id', controller.agregarCom)


module.exports = router
