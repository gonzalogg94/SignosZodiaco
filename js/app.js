// declaracion de variables 
let formulario = document.querySelector('#formZodiaco');
let fechaNacimiento = document.querySelector('#fechaNacimiento');
let elemento=document.querySelector("#selectorElemento")

// agrego los eventos 
formulario.addEventListener('submit', mostrarFecha)

// funciones 
function mostrarFecha(e){
   e.preventDefault();
   console.log(fechaNacimiento.value)
   console.log(elemento.value)
}