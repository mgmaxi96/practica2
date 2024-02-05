const express = require('express')

const controlador = require('../controladores/home')

const router = express.Router()

router.get("/", controlador.getHome)
router.post('/',controlador.postHome)
router.get('/crear',controlador.getCrear)
router.get('/:id/editar',controlador.getUpdate)
router.get('/:id/detalle',controlador.getProductDetail)
router.put('/:id/editar',controlador.updateHome)
router.delete('/:id/eliminar', controlador.deleteHome)



module.exports = router