/** EJERCICIO 1 */
const formulario = document.querySelector("#formulario");
const nombre = document.querySelector("#nombre");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");

const errorNombre = document.querySelector(".errorNombre");
const errorAsunto = document.querySelector(".errorAsunto");
const errorMensaje = document.querySelector(".errorMensaje");

const resultado = document.querySelector(".resultado");

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const regex = /^[a-zA-Z]+$/;

    if(regex.test(nombre.value) && regex.test(asunto.value) && regex.test(mensaje.value)){
        resultado.textContent = "¡Mensaje enviado con exito!"
    }else{
        if(!regex.test(nombre.value)){
            errorNombre.textContent = "El nombre es requerido o no es válido";
        } else{
            errorNombre.textContent = '';
        }
    
        if(!regex.test(asunto.value)){
            errorAsunto.textContent = "El asunto es requerido o no es válido";
        }else{
            errorAsunto.textContent = '';
        }
    
        if(!regex.test(mensaje.value)){
            errorMensaje.textContent = "El mensaje es requerido o no es válido";
        } else{
            errorMensaje.textContent = '';
        }
    }

})

