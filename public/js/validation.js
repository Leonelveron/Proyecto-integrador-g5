window.addEventListener('load', function () {
    let btnGuardar = document.querySelector('.js-guardar')
    let nombre = document.querySelector('.js-nombre')
    let descripcion = document.querySelector('.js-descripcion')
    let precio = document.querySelector('.js-precio')

    let precioOK
    let nombreOK
    let descripcionOK

    function habilitarGuardar() {
        if (nombreOK && precioOK && descripcionOK === true) {
            btnGuardar.classList.remove('disabled')
        }
    }

    nombre.addEventListener('keyup', function (event) {
        event.target.classList.add('is-invalid')
        if (event.target.value.length > 4) {
            event.target.classList.replace('is-invalid', 'is-valid')
            nombreOK = true
            habilitarGuardar()
        } else {
            event.target.classList.replace('is-valid', 'is-invalid')
        }
    })
    descripcion.addEventListener('keyup', function (event) {
        event.target.classList.add('is-invalid')
        if (event.target.value.length > 20) {
            event.target.classList.replace('is-invalid', 'is-valid')
            descripcionOK = true
            habilitarGuardar()
        } else {
            event.target.classList.replace('is-valid', 'is-invalid')
        }
    })
    precio.addEventListener('keyup', function (event) {
        event.target.classList.add('is-invalid')
        if (event.target.value > 10) {
            event.target.classList.replace('is-invalid', 'is-valid')
            precioOK = true
            habilitarGuardar()
        } else {
            event.target.classList.replace('is-valid', 'is-invalid')
            btnGuardar.classList.add('disabled')
        }
    })
})