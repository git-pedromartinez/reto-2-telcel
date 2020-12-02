(function() {
    var form_new_user = document.getElementById('form_new_user')
    var in_nombre = document.getElementById('in_nombre')
    var in_email = document.getElementById('in_email')
    var in_puesto = document.getElementById('in_puesto')
    var in_fecha = document.getElementById('in_fecha')
    var in_domicilio = document.getElementById('in_domicilio')
    var in_habilidad = document.getElementById('in_habilidad')
    form_new_user.addEventListener('submit', function(e) {
        e.preventDefault()
            // console.log(
            //     in_nombre.value,
            //     in_email.value,
            //     in_puesto.value,
            //     in_fecha.value,
            //     in_domicilio.value,
            //     in_habilidad.value
            // )
        var user = {
            nombre: in_nombre.value,
            email: in_email.value,
            puesto: in_puesto.value,
            fecha: in_fecha.value,
            domicilio: in_domicilio.value,
            habilidades: in_habilidad.value
        }
        var user_current=null
        axios
            .post(`/nuevo_registro/`, user)
            .then((response) => {
                user_current=response.data.user
            })
            .catch((error) => {})
            .finally(function() {
                window.location = '/buscar_registro/?id='+user_current.id_public
            })


    })
})();