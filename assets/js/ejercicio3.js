/* EJERCICIO 3*/
const resultado = document.querySelector('.resultado');

const valor1 = document.querySelector('#valor1');
const valor2 = document.querySelector('#valor2');

const btnSumar = document.querySelector("#btn-sumar")
const btnRestar = document.querySelector("#btn-restar")

btnSumar.addEventListener('click', function(){
    const suma = parseInt(valor1.value) + parseInt(valor2.value);
    resultado.textContent = suma;
})

btnRestar.addEventListener('click', function(){
    const resta = parseInt(valor1.value) - parseInt(valor2.value);
    if(resta < 0){
        resultado.textContent = 0;
    }else{
        resultado.textContent = resta;
    }
})