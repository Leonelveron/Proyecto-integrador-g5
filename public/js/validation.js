window.addEventListener('load', function () {
    let btnGuardar = document.querySelector('.js-guardar');
    let nombre = document.querySelector('.js-nombre');
    let precio = document.querySelector('.js-precio');  
    let descripcion = document.querySelector('.js-descripcion');
    let dimen = document.querySelector('.js-dimen');
    let reso = document.querySelector('.js-reso');
    let tama = document.querySelector('.js-tama');
    let proce = document.querySelector('.js-proce');
    let alma = document.querySelector('.js-alma');
    let bate= document.querySelector('.js-bate');
    let so = document.querySelector('.js-so');
    let agua = document.querySelector('.js-agua');


    let precioOK
    let nombreOK
    let dimenOK
    let resoOK
    let tamaOK
    let proceOK
    let almaOK
    let bateOK
    let soOK
    let aguaOK
    


    function habilitarGuardar() {
        if (nombreOK && precioOK && descripcionOK&&dimenOK&&resoOK&&tamaOK&&
            proceOK&&almaOK&&bateOK&&soOK&&aguaOK === true) {
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
        if (event.target.value > 100) {
            event.target.classList.replace('is-invalid','is-valid')
            precioOK = true
            habilitarGuardar()
        } else {
            event.target.classList.replace('is-valid', 'is-invalid')
            btnGuardar.classList.add('disabled')
        }
    })
    dimen.addEventListener('keyup', function (event) {
        event.target.classList.add('is-invalid')
        if (event.target.value.length > 4) {
            event.target.classList.replace('is-invalid', 'is-valid')
            nombreOK = true
            habilitarGuardar()
        } else {
            event.target.classList.replace('is-valid', 'is-invalid')
        }
    })
    reso.addEventListener('keyup', function (event) {
        event.target.classList.add('is-invalid')
        if (event.target.value.length > 4) {
            event.target.classList.replace('is-invalid', 'is-valid')
            nombreOK = true
            habilitarGuardar()
        } else {
            event.target.classList.replace('is-valid', 'is-invalid')
        }
    })
    so.addEventListener('keyup', function (event) {
        event.target.classList.add('is-invalid')
        if (event.target.value.length > 4) {
            event.target.classList.replace('is-invalid', 'is-valid')
            nombreOK = true
            habilitarGuardar()
        } else {
            event.target.classList.replace('is-valid', 'is-invalid')
        }
    })
    tama.addEventListener('keyup', function (event) {
        event.target.classList.add('is-invalid')
        if (event.target.value.length > 4) {
            event.target.classList.replace('is-invalid', 'is-valid')
            nombreOK = true
            habilitarGuardar()
        } else {
            event.target.classList.replace('is-valid', 'is-invalid')
        }
    })
    bate.addEventListener('keyup', function (event) {
        event.target.classList.add('is-invalid')
        if (event.target.value.length > 4) {
            event.target.classList.replace('is-invalid', 'is-valid')
            nombreOK = true
            habilitarGuardar()
        } else {
            event.target.classList.replace('is-valid', 'is-invalid')
        }
    })
    alma.addEventListener('keyup', function (event) {
        event.target.classList.add('is-invalid')
        if (event.target.value.length > 4) {
            event.target.classList.replace('is-invalid', 'is-valid')
            nombreOK = true
            habilitarGuardar()
        } else {
            event.target.classList.replace('is-valid', 'is-invalid')
        }
    })
    proce.addEventListener('keyup', function (event) {
        event.target.classList.add('is-invalid')
        if (event.target.value.length > 4) {
            event.target.classList.replace('is-invalid', 'is-valid')
            nombreOK = true
            habilitarGuardar()
        } else {
            event.target.classList.replace('is-valid', 'is-invalid')
        }
    })
    agua.addEventListener('keyup', function (event) {
        event.target.classList.add('is-invalid')
        if (event.target.value.length > 4) {
            event.target.classList.replace('is-invalid', 'is-valid')
            nombreOK = true
            habilitarGuardar()
        } else {
            event.target.classList.replace('is-valid', 'is-invalid')
        }
    })
    

})