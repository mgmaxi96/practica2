const express = require ('express')

const controlador = require ('../controladores/products')


const router = express.Router()


router.get('/', controlador.getProduct)
router.get('/:id/update',controlador.getUpdate)
router.post('/',controlador.create)
router.put('/',controlador.update)



module.exports = router