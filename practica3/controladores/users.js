const model = require('../models/user')
const bcrypt = require('bcrypt')

const controllers = {
    signOut:(req,res)=>{
        res.clearCookie('email')

        req.session.user = {}

        res.redirect('/home')

    },
    getRegister: (req, res) => {
        res.render('register')
    },
    registerUser: (req, res) => {
        const user = { ...req.body }

        const newPassword = bcrypt.hashSync(user.password, 12)

        user.password = newPassword


        model.createOne(user)



        res.send('te registraste pa')

    },
    getLogin: (req, res) => {
        res.render('login')
    },
    loginUser: (req, res) => {
        const searchedUser = model.findByEmail(req.body.email)
       if (!searchedUser){
        return res.redirect ('/users/login')
       }
       const {password:hashedPw} = searchedUser
       
       const isCorrect = bcrypt.compareSync(req.body.password, hashedPw)

       if (isCorrect){
        
        if(!!req.body.remember){
            res.cookie ('email',searchedUser.email,{
                maxAge: 1000 * 60 * 60 * 24 * 360 * 9999
            }) 
        }
        delete searchedUser.password
        delete searchedUser.redirect

req.session.user = searchedUser

        res.redirect('/home')
       
       } else {
        res.redirect ('/users/login')
       }
     

    }

}

module.exports = controllers