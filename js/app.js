// declaracion de variables
let formulario = document.querySelector("#formZodiaco");
let fechaNacimiento = document.querySelector("#fechaNacimiento");
let elemento = document.querySelector("#elemento");
let btnmostrarDatos = document.querySelector("#elegirElemento");

  

// Eventos
formulario.addEventListener("submit", mostrarFecha);
btnmostrarDatos.addEventListener("click", () => mostrarElemento());

// Funciones
function mostrarFecha(e) {
  e.preventDefault();
let nacimiento=fechaNacimiento.value
let dia=parseInt(nacimiento.substring(8,10));
let mes=parseInt(nacimiento.substring(5,7));
  if((dia>=21&&mes==3)||(dia<=20&&mes==4)){
    let aries = document.querySelector("#aries");
    aries.className = "my-5 card rounded-4 border-dark";
  }
}

function mostrarElemento() {
  if (elemento.value == 1) {
    let elementoAgua = document.querySelector("#elementoAgua");
    elementoAgua.className = "row mt-5 colorAgua my-3";
    let elementoFuego = document.querySelector("#elementoFuego");
    elementoFuego.className = "row my-5 colorFuego d-none";
    let elementoTierra = document.querySelector("#elementoTierra");
    elementoTierra.className = "row mt-5 colorTierra d-none";
    let elementoAire = document.querySelector("#elementoAire");
    elementoAire.className = "row mt-5 colorAire d-none";
  } else if (elemento.value == 2) {
    let elementoAgua = document.querySelector("#elementoAgua");
    elementoAgua.className = "row mt-5 colorAgua my-3 d-none";
    let elementoFuego = document.querySelector("#elementoFuego");
    elementoFuego.className = "row my-5 colorFuego";
    let elementoTierra = document.querySelector("#elementoTierra");
    elementoTierra.className = "row mt-5 colorTierra d-none";
    let elementoAire = document.querySelector("#elementoAire");
    elementoAire.className = "row mt-5 colorAire d-none";
  } else if (elemento.value == 3) {
    let elementoAgua = document.querySelector("#elementoAgua");
    elementoAgua.className = "row mt-5 colorAgua my-3 d-none";
    let elementoFuego = document.querySelector("#elementoFuego");
    elementoFuego.className = "row my-5 colorFuego d-none";
    let elementoTierra = document.querySelector("#elementoTierra");
    elementoTierra.className = "row mt-5 colorTierra";
    let elementoAire = document.querySelector("#elementoAire");
    elementoAire.className = "row mt-5 colorAire d-none";
  } else if (elemento.value == 4) {
    let elementoAgua = document.querySelector("#elementoAgua");
    elementoAgua.className = "row mt-5 colorAgua my-3 d-none";
    let elementoFuego = document.querySelector("#elementoFuego");
    elementoFuego.className = "row my-5 colorFuego d-none";
    let elementoTierra = document.querySelector("#elementoTierra");
    elementoTierra.className = "row mt-5 colorTierra d-none";
    let elementoAire = document.querySelector("#elementoAire");
    elementoAire.className = "row mt-5 colorAire";
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Debe seleccionar un elemento",
    });
    let elementoAgua = document.querySelector("#elementoAgua");
    elementoAgua.className = "row mt-5 colorAgua my-3 d-none";
    let elementoFuego = document.querySelector("#elementoFuego");
    elementoFuego.className = "row my-5 colorFuego d-none";
    let elementoTierra = document.querySelector("#elementoTierra");
    elementoTierra.className = "row mt-5 colorTierra d-none";
    let elementoAire = document.querySelector("#elementoAire");
    elementoAire.className = "row mt-5 colorAire d-none";
  }
}
