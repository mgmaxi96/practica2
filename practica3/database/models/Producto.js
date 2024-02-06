module.exports = (sequelize, Datatype) => {

    const alias = "Producto"
    const cols = {
        id: {
            type: Datatype.INTEGER,
            primaryKey: true, // para que sea la clave primaria
            autoIncrement: true // para que se autoincremente de valor numerico
        },
        nombre: {
            type: Datatype.STRING,
            allowNull: false // para que el valor no sea nulo

        },
        marca: {
            type: Datatype.STRING,
            allowNull: false,
            unique: true // para que el valor sea unico siempre
        },
        marca_id:{
            type:Datatype.INTEGER, // revisar, es una clave foranea 
            allowNull: false,
            references:{
                model:'',
                key:'id'
            }
        }

    }
    const config = {
        tableName: 'productos', // nombre tal cual esta en el php
        timestamps: false // para no crear columnas created y updated de mas

    }


    const Producto = sequelize.define(alias, cols, config)

    // siempre retornar, para darle valides a la variable producto


   
return Producto
} 