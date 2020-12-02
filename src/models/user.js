const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    id_public:String,
    nombre: String,
    email: String,
    puesto: String,
    fecha: String,
    domicilio: String,
    habilidades: Array
});

module.exports = model('user', userSchema)