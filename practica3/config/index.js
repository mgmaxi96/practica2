const dotEnv = require ('dotoenv').config()

module.exports = {
    PORT : process.env.PORT,
    SECRET : process.env.SECRET
}