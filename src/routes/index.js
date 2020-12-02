const express = require("express");
const router = express.Router();

// Controllers
const Home = require("../controllers/Home");
home = new Home();
const User = require("../controllers/User")
user = new User()

module.exports = function(app) {
    router.get("/", home.index);

    router.get('/nuevo_registro/', user.nuevo_registro)
    router.get('/buscar_registro/', user.buscar_registro)

    //Api
    router.post('/nuevo_registro/', user.subir_nuevo_registro)

    //test

    // router.get("/*", (req, res) => {
    //     res.redirect("/");
    //     return;
    // });

    app.use(router);
};