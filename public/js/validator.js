window.addEventListener("load", function(){


    let formLogin = document.querySelector("form.login");

    formLogin.addEventListener("submit", function(event){
        
        
        let errores = [];

        let campoEmail = document.querySelector("input.email_login");

        if (campoEmail.value == ""){
            errores.push ("El campo Email debe ser completado");
        }

        let campoContraseña = document.querySelector("input.password_login");

        if (campoContraseña.value == ""){
            errores.push("El campo Contraseña debe ser completado");

        }

        if(errores.length > 0){
            event.preventDefault();
            let ulErrores = document.querySelector("div.errores ul")

            for(let i = 0; i < errores.length;i++){
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
                
            }

        }

    });



let formRegistro = document.querySelector("form.registro");

    formRegistro.addEventListener("submit", function(event){

        let errores = [];

        let campoNombre = document.querySelector("input.nombre")

        if(campoNombre.value == ""){
            errores.push("El campo Nombre debe ser completado");
        }else if(campoNombre.value.length <= 2){
            errores.push("El campo Nombre debe tener más de 2 caracteres");
        }

        let campoApellido = document.querySelector("input.apellido")

        if(campoApellido.value == ""){
            errores.push("El campo Apellido debe ser completado");
        }else if(campoApellido.value.length <= 2){
            errores.push("El campo Apellido debe tener más de 2 caracteres");
        }

        let campoEmail = document.querySelector("input.email");

        if(campoEmail.value == ""){
            errores.push("El campo email debe ser completado")
        }else if (campoEmail.value.includes("@") == false || campoEmail.value.includes(".com") == "false"){
            errores.push("Ingrese un Email valido")
        }

        let campoContraseña = document.querySelector("input.password");

        if (campoContraseña.value == ""){
            errores.push("El campo Contraseña debe ser completado");

        }else if(campoContraseña.value < 8){
            errores.push("La contraseña no tiene suficientes caracteres (min.8)");
        }


        if(errores.length > 0){
            event.preventDefault();
            let ulErrores = document.querySelector("div.errores ul")

            for(let i = 0; i < errores.length;i++){
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
                
            }
        }
    });
})