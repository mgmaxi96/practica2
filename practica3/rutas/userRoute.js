const express = require ('express')
const router = express.Router()
const controller = require ('../controladores/users')


router.get ('/sign-out',controller.signOut)
router.get('/register',controller.getRegister)
router.post('/', controller.registerUser)
router.get('/login',controller.getLogin)
router.post('/login', controller.loginUser)

module.exports = router