const model = require('../models/productos')

const controller = {
    getHome: (req, res) => {
        let userData = req.session.user
        if (!userData){
            userData = {}
        }
        const productos = model.findAll()

        res.render('home', { productos: productos,userData })
    },

    postHome: (req, res) => {
        let datos = req.body
        console.log(req.body);
        datos.precio = Number(datos.precio)

        model.createOne(datos)

        res.redirect('/home')

    },

    getUpdate: (req, res) => {
        const id = Number(req.params.id)
        const aModificar = model.findById(id)

        if (!aModificar) {
            return res.send('error')

        }
        res.render('editar', { producto: aModificar })


    },
    getProductDetail: (req, res) => {

        const id = Number(req.params.id)

        const aMostrar = model.findById(id)

        if (!aMostrar) {
            return res.send('error')
        }

        res.render('detalle', { producto: aMostrar })
    },

    updateHome: (req, res) => {

        const id = Number(req.params.id)

        const nuevoProducto = req.body

        model.updateById(id, nuevoProducto)

        res.redirect('/home')
    },
    deleteHome : (req,res) =>{
   const id = Number (req.params.id)

   model.deleteById (id)
   
   res.redirect ('/home')         // HOLA FLOR

    },

    getCrear : (req,res) =>{
        
        
        
        res.render ('crear')

    }





}

module.exports = controller