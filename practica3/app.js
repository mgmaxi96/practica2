const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')
const rutas = require('./rutas/homeRoute')
const userRutas = require('./rutas/userRoute')
const methodOverride = require('method-override')
const cookieParser = require ('cookie-parser')
const expressSession = require ('express-session')


app.listen(3000, () => {
    console.log('servidor funcionando');
})


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(cookieParser())
app.use(expressSession({secret:'este es mi secreto'}))

app.use('/home', rutas);
app.use('/users', userRutas)

app.use((req,res,next)=>{
    if (req.cookies.email){
        const model = require ('./models/user')

        const user = model.findByEmail(req.cookies.email)

        delete user.id
        delete user.password
        req.session.user = user
    }
    next()
})


app.set('view engine', 'ejs')
app.set('views', [
    path.join(__dirname, './views/home'),
    path.join(__dirname,'./views/users')
])

