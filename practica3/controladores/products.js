const { Producto } = require('../database/models')


const controller = {
    getProduct: async (req, res) => {
        try {
            const productos = await Producto.findAll({
                raw: true,
                nest: true
            })
            res.render('products', { productos })
        } catch (error) {
            console.log(error);
        }
    },
    create: async (req, res) => {
        const nuevoProducto = {
            nombre: req.body.nombre,
            marca: req.body.marca,
        }
        try {
            const datos = await Producto.create(nuevoProducto)
            console.log(datos);
        } catch (error) {
            console.log(error);
        }
        res.send('producto creado')
    },
    getUpdate: async (req, res) => {
        try {
            const producto = await Producto.findByPk(req.params.id)
            res.render('updateProduct', { producto })
        } catch (error) {
            console.log(error);
        }
    },
    update: async (req,res) =>{

        const datos = req.body

        try{
            await Producto.update(datos,{
                where:{
                    id:req.body.id
                }
            })
            res.redirect ('/products')
        }catch (error){
            console.log(error);
        }

    }





}

module.exports = controller