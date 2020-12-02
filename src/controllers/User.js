const userSchema = require('../models/user')

const Id = require('./tools/Id')
const idLib = new Id()

class Home {
    async nuevo_registro(req, res) {
        res.render('registro', {})
        return
    };

    async buscar_registro(req, res) {
        var { id } = req.query
        var parametro_de_busqueda = id
        var users = null
        //id_public
        users = await userSchema.find({ id_public: parametro_de_busqueda })
        
        if (users.length>0) {
            res.render('usuario', { users })
            return
        }
        //nombre
        users = await userSchema.find({ nombre: parametro_de_busqueda })
        if (users.length>0) {
            res.render('usuario', { users })
            return
        }
        //email
        users = await userSchema.find({ email: parametro_de_busqueda })
        if (users.length>0) {
            res.render('usuario', { users })
            return
        }
        //puesto
        users = await userSchema.find({ puesto: parametro_de_busqueda })
        if (users.length>0) {
            res.render('usuario', { users })
            return
        }
        //fecha
        users = await userSchema.find({ fecha: parametro_de_busqueda })
        if (users.length>0) {
            res.render('usuario', { users })
            return
        }
        //domicilio
        users = await userSchema.find({ domicilio: parametro_de_busqueda })
        if (users.length>0) {
            res.render('usuario', { users })
            return
        }
        //habilidades
        users = await userSchema.find({ habilidades: parametro_de_busqueda })
        if (users.length>0) {
            res.render('usuario', { users })
            return
        }

        res.render('usuario', { users:[] })
        return
    };
    async subir_nuevo_registro(req, res) {
        var {
            nombre,
            email,
            puesto,
            fecha,
            domicilio,
            habilidades
        } = req.body
        var user = {
            id_public: idLib.nuevo(),
            nombre,
            email,
            puesto,
            fecha,
            domicilio,
            habilidades
        }
        var user_model = await new userSchema(user)
        var user_aux = await userSchema.findOne({ email })
        if (!user_aux) {
            await user_model.save()
        }
        // user = null
        res.json({ user })
        return
    };

};
module.exports = Home;