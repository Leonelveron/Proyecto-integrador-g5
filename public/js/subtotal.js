window.addEventListener('load', function () {
    let subtotal = document.querySelector('#subtotal')
    let valor = subtotal.innerHTML
    let cantidad = document.querySelector('#cantidad')
    console.log(valor)
    subtotal.innerHTML = '$' + valor

    cantidad.addEventListener('input', function (e) {
            subtotal.innerHTML = `$${valor * e.target.value}`
        })
})