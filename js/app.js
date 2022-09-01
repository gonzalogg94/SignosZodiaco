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
  let nacimiento = fechaNacimiento.value;
  let dia = parseInt(nacimiento.substring(8, 10));
  let mes = parseInt(nacimiento.substring(5, 7));
  if ((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4)) {
    let aries = document.querySelector("#aries");
    aries.className = "my-5 card rounded-4 border-dark";
    let tauro = document.querySelector("#tauro");
    tauro.className = "my-5 card rounded-4 border-dark d-none";
    let geminis = document.querySelector("#geminis");
    geminis.className = "my-5 card rounded-4 border-dark d-none";
    let cancer = document.querySelector("#cancer");
    cancer.className = "my-5 card rounded-4 border-dark d-none";
    let leo = document.querySelector("#leo");
    leo.className = "my-5 card rounded-4 border-dark d-none";
    let virgo = document.querySelector("#virgo");
    virgo.className = "my-5 card rounded-4 border-dark d-none";
    let libra = document.querySelector("#libra");
    libra.className = "my-5 card rounded-4 border-dark d-none";
    let escorpio = document.querySelector("#escorpio");
    escorpio.className = "my-5 card rounded-4 border-dark d-none";
    let sagitario = document.querySelector("#sagitario");
    sagitario.className = "my-5 card rounded-4 border-dark d-none";
    let capricornio = document.querySelector("#capricornio");
    capricornio.className = "my-5 card rounded-4 border-dark d-none";
    let acuario = document.querySelector("#acuario");
    acuario.className = "my-5 card rounded-4 border-dark d-none";
    let piscis = document.querySelector("#piscis");
    piscis.className = "my-5 card rounded-4 border-dark d-none";
  } else if ((dia >= 20 && mes == 4) || (dia <= 20 && mes == 5)) {
    let aries = document.querySelector("#aries");
    aries.className = "my-5 card rounded-4 border-dark d-none";
    let tauro = document.querySelector("#tauro");
    tauro.className = "my-5 card rounded-4 border-dark";
    let geminis = document.querySelector("#geminis");
    geminis.className = "my-5 card rounded-4 border-dark d-none";
    let cancer = document.querySelector("#cancer");
    cancer.className = "my-5 card rounded-4 border-dark d-none";
    let leo = document.querySelector("#leo");
    leo.className = "my-5 card rounded-4 border-dark d-none";
    let virgo = document.querySelector("#virgo");
    virgo.className = "my-5 card rounded-4 border-dark d-none";
    let libra = document.querySelector("#libra");
    libra.className = "my-5 card rounded-4 border-dark d-none";
    let escorpio = document.querySelector("#escorpio");
    escorpio.className = "my-5 card rounded-4 border-dark d-none";
    let sagitario = document.querySelector("#sagitario");
    sagitario.className = "my-5 card rounded-4 border-dark d-none";
    let capricornio = document.querySelector("#capricornio");
    capricornio.className = "my-5 card rounded-4 border-dark d-none";
    let acuario = document.querySelector("#acuario");
    acuario.className = "my-5 card rounded-4 border-dark d-none";
    let piscis = document.querySelector("#piscis");
    piscis.className = "my-5 card rounded-4 border-dark d-none";
  } else if ((dia >= 21 && mes == 5) || (dia <= 20 && mes == 6)) {
    let aries = document.querySelector("#aries");
    aries.className = "my-5 card rounded-4 border-dark d-none";
    let tauro = document.querySelector("#tauro");
    tauro.className = "my-5 card rounded-4 border-dark d-none";
    let geminis = document.querySelector("#geminis");
    geminis.className = "my-5 card rounded-4 border-dark";
    let cancer = document.querySelector("#cancer");
    cancer.className = "my-5 card rounded-4 border-dark d-none";
    let leo = document.querySelector("#leo");
    leo.className = "my-5 card rounded-4 border-dark d-none";
    let virgo = document.querySelector("#virgo");
    virgo.className = "my-5 card rounded-4 border-dark d-none";
    let libra = document.querySelector("#libra");
    libra.className = "my-5 card rounded-4 border-dark d-none";
    let escorpio = document.querySelector("#escorpio");
    escorpio.className = "my-5 card rounded-4 border-dark d-none";
    let sagitario = document.querySelector("#sagitario");
    sagitario.className = "my-5 card rounded-4 border-dark d-none";
    let capricornio = document.querySelector("#capricornio");
    capricornio.className = "my-5 card rounded-4 border-dark d-none";
    let acuario = document.querySelector("#acuario");
    acuario.className = "my-5 card rounded-4 border-dark d-none";
    let piscis = document.querySelector("#piscis");
    piscis.className = "my-5 card rounded-4 border-dark d-none";
  } else if ((dia >= 21 && mes == 6) || (dia <= 22 && mes == 7)) {
    let aries = document.querySelector("#aries");
    aries.className = "my-5 card rounded-4 border-dark d-none";
    let tauro = document.querySelector("#tauro");
    tauro.className = "my-5 card rounded-4 border-dark d-none";
    let geminis = document.querySelector("#geminis");
    geminis.className = "my-5 card rounded-4 border-dark d-none";
    let cancer = document.querySelector("#cancer");
    cancer.className = "my-5 card rounded-4 border-dark";
    let leo = document.querySelector("#leo");
    leo.className = "my-5 card rounded-4 border-dark d-none";
    let virgo = document.querySelector("#virgo");
    virgo.className = "my-5 card rounded-4 border-dark d-none";
    let libra = document.querySelector("#libra");
    libra.className = "my-5 card rounded-4 border-dark d-none";
    let escorpio = document.querySelector("#escorpio");
    escorpio.className = "my-5 card rounded-4 border-dark d-none";
    let sagitario = document.querySelector("#sagitario");
    sagitario.className = "my-5 card rounded-4 border-dark d-none";
    let capricornio = document.querySelector("#capricornio");
    capricornio.className = "my-5 card rounded-4 border-dark d-none";
    let acuario = document.querySelector("#acuario");
    acuario.className = "my-5 card rounded-4 border-dark d-none";
    let piscis = document.querySelector("#piscis");
    piscis.className = "my-5 card rounded-4 border-dark d-none";
  } else if ((dia >= 23 && mes == 7) || (dia <= 22 && mes == 8)) {
    let aries = document.querySelector("#aries");
    aries.className = "my-5 card rounded-4 border-dark d-none";
    let tauro = document.querySelector("#tauro");
    tauro.className = "my-5 card rounded-4 border-dark d-none";
    let geminis = document.querySelector("#geminis");
    geminis.className = "my-5 card rounded-4 border-dark d-none";
    let cancer = document.querySelector("#cancer");
    cancer.className = "my-5 card rounded-4 border-dark d-none";
    let leo = document.querySelector("#leo");
    leo.className = "my-5 card rounded-4 border-dark";
    let virgo = document.querySelector("#virgo");
    virgo.className = "my-5 card rounded-4 border-dark d-none";
    let libra = document.querySelector("#libra");
    libra.className = "my-5 card rounded-4 border-dark d-none";
    let escorpio = document.querySelector("#escorpio");
    escorpio.className = "my-5 card rounded-4 border-dark d-none";
    let sagitario = document.querySelector("#sagitario");
    sagitario.className = "my-5 card rounded-4 border-dark d-none";
    let capricornio = document.querySelector("#capricornio");
    capricornio.className = "my-5 card rounded-4 border-dark d-none";
    let acuario = document.querySelector("#acuario");
    acuario.className = "my-5 card rounded-4 border-dark d-none";
    let piscis = document.querySelector("#piscis");
    piscis.className = "my-5 card rounded-4 border-dark d-none";
  } else if ((dia >= 20 && mes == 4) || (dia <= 20 && mes == 5)) {
    let aries = document.querySelector("#aries");
    aries.className = "my-5 card rounded-4 border-dark d-none";
    let tauro = document.querySelector("#tauro");
    tauro.className = "my-5 card rounded-4 border-dark";
    let geminis = document.querySelector("#geminis");
    geminis.className = "my-5 card rounded-4 border-dark d-none";
    let cancer = document.querySelector("#cancer");
    cancer.className = "my-5 card rounded-4 border-dark d-none";
    let leo = document.querySelector("#leo");
    leo.className = "my-5 card rounded-4 border-dark d-none";
    let virgo = document.querySelector("#virgo");
    virgo.className = "my-5 card rounded-4 border-dark d-none";
    let libra = document.querySelector("#libra");
    libra.className = "my-5 card rounded-4 border-dark d-none";
    let escorpio = document.querySelector("#escorpio");
    escorpio.className = "my-5 card rounded-4 border-dark d-none";
    let sagitario = document.querySelector("#sagitario");
    sagitario.className = "my-5 card rounded-4 border-dark d-none";
    let capricornio = document.querySelector("#capricornio");
    capricornio.className = "my-5 card rounded-4 border-dark d-none";
    let acuario = document.querySelector("#acuario");
    acuario.className = "my-5 card rounded-4 border-dark d-none";
    let piscis = document.querySelector("#piscis");
    piscis.className = "my-5 card rounded-4 border-dark d-none";
  } else if ((dia >= 23 && mes == 8) || (dia <= 22 && mes == 9)) {
    let aries = document.querySelector("#aries");
    aries.className = "my-5 card rounded-4 border-dark d-none";
    let tauro = document.querySelector("#tauro");
    tauro.className = "my-5 card rounded-4 border-dark d-none";
    let geminis = document.querySelector("#geminis");
    geminis.className = "my-5 card rounded-4 border-dark d-none";
    let cancer = document.querySelector("#cancer");
    cancer.className = "my-5 card rounded-4 border-dark d-none";
    let leo = document.querySelector("#leo");
    leo.className = "my-5 card rounded-4 border-dark d-none";
    let virgo = document.querySelector("#virgo");
    virgo.className = "my-5 card rounded-4 border-dark";
    let libra = document.querySelector("#libra");
    libra.className = "my-5 card rounded-4 border-dark d-none";
    let escorpio = document.querySelector("#escorpio");
    escorpio.className = "my-5 card rounded-4 border-dark d-none";
    let sagitario = document.querySelector("#sagitario");
    sagitario.className = "my-5 card rounded-4 border-dark d-none";
    let capricornio = document.querySelector("#capricornio");
    capricornio.className = "my-5 card rounded-4 border-dark d-none";
    let acuario = document.querySelector("#acuario");
    acuario.className = "my-5 card rounded-4 border-dark d-none";
    let piscis = document.querySelector("#piscis");
    piscis.className = "my-5 card rounded-4 border-dark d-none";
  } else if ((dia >= 23 && mes == 9) || (dia <= 22 && mes == 10)) {
    let aries = document.querySelector("#aries");
    aries.className = "my-5 card rounded-4 border-dark d-none";
    let tauro = document.querySelector("#tauro");
    tauro.className = "my-5 card rounded-4 border-dark d-none";
    let geminis = document.querySelector("#geminis");
    geminis.className = "my-5 card rounded-4 border-dark d-none";
    let cancer = document.querySelector("#cancer");
    cancer.className = "my-5 card rounded-4 border-dark d-none";
    let leo = document.querySelector("#leo");
    leo.className = "my-5 card rounded-4 border-dark d-none";
    let virgo = document.querySelector("#virgo");
    virgo.className = "my-5 card rounded-4 border-dark d-none";
    let libra = document.querySelector("#libra");
    libra.className = "my-5 card rounded-4 border-dark";
    let escorpio = document.querySelector("#escorpio");
    escorpio.className = "my-5 card rounded-4 border-dark d-none";
    let sagitario = document.querySelector("#sagitario");
    sagitario.className = "my-5 card rounded-4 border-dark d-none";
    let capricornio = document.querySelector("#capricornio");
    capricornio.className = "my-5 card rounded-4 border-dark d-none";
    let acuario = document.querySelector("#acuario");
    acuario.className = "my-5 card rounded-4 border-dark d-none";
    let piscis = document.querySelector("#piscis");
    piscis.className = "my-5 card rounded-4 border-dark d-none";
  } else if ((dia >= 23 && mes == 10) || (dia <= 21 && mes == 11)) {
    let aries = document.querySelector("#aries");
    aries.className = "my-5 card rounded-4 border-dark d-none";
    let tauro = document.querySelector("#tauro");
    tauro.className = "my-5 card rounded-4 border-dark d-none";
    let geminis = document.querySelector("#geminis");
    geminis.className = "my-5 card rounded-4 border-dark d-none";
    let cancer = document.querySelector("#cancer");
    cancer.className = "my-5 card rounded-4 border-dark d-none";
    let leo = document.querySelector("#leo");
    leo.className = "my-5 card rounded-4 border-dark d-none";
    let virgo = document.querySelector("#virgo");
    virgo.className = "my-5 card rounded-4 border-dark d-none";
    let libra = document.querySelector("#libra");
    libra.className = "my-5 card rounded-4 border-dark d-none";
    let escorpio = document.querySelector("#escorpio");
    escorpio.className = "my-5 card rounded-4 border-dark";
    let sagitario = document.querySelector("#sagitario");
    sagitario.className = "my-5 card rounded-4 border-dark d-none";
    let capricornio = document.querySelector("#capricornio");
    capricornio.className = "my-5 card rounded-4 border-dark d-none";
    let acuario = document.querySelector("#acuario");
    acuario.className = "my-5 card rounded-4 border-dark d-none";
    let piscis = document.querySelector("#piscis");
    piscis.className = "my-5 card rounded-4 border-dark d-none";
  } else if ((dia >= 22 && mes == 11) || (dia <= 21 && mes == 12)) {
    let aries = document.querySelector("#aries");
    aries.className = "my-5 card rounded-4 border-dark d-none";
    let tauro = document.querySelector("#tauro");
    tauro.className = "my-5 card rounded-4 border-dark d-none";
    let geminis = document.querySelector("#geminis");
    geminis.className = "my-5 card rounded-4 border-dark d-none";
    let cancer = document.querySelector("#cancer");
    cancer.className = "my-5 card rounded-4 border-dark d-none";
    let leo = document.querySelector("#leo");
    leo.className = "my-5 card rounded-4 border-dark d-none";
    let virgo = document.querySelector("#virgo");
    virgo.className = "my-5 card rounded-4 border-dark d-none";
    let libra = document.querySelector("#libra");
    libra.className = "my-5 card rounded-4 border-dark d-none";
    let escorpio = document.querySelector("#escorpio");
    escorpio.className = "my-5 card rounded-4 border-dark d-none";
    let sagitario = document.querySelector("#sagitario");
    sagitario.className = "my-5 card rounded-4 border-dark";
    let capricornio = document.querySelector("#capricornio");
    capricornio.className = "my-5 card rounded-4 border-dark d-none";
    let acuario = document.querySelector("#acuario");
    acuario.className = "my-5 card rounded-4 border-dark d-none";
    let piscis = document.querySelector("#piscis");
    piscis.className = "my-5 card rounded-4 border-dark d-none";
  } else if ((dia >= 22 && mes == 12) || (dia <= 20 && mes == 1)) {
    let aries = document.querySelector("#aries");
    aries.className = "my-5 card rounded-4 border-dark d-none";
    let tauro = document.querySelector("#tauro");
    tauro.className = "my-5 card rounded-4 border-dark d-none";
    let geminis = document.querySelector("#geminis");
    geminis.className = "my-5 card rounded-4 border-dark d-none";
    let cancer = document.querySelector("#cancer");
    cancer.className = "my-5 card rounded-4 border-dark d-none";
    let leo = document.querySelector("#leo");
    leo.className = "my-5 card rounded-4 border-dark d-none";
    let virgo = document.querySelector("#virgo");
    virgo.className = "my-5 card rounded-4 border-dark d-none";
    let libra = document.querySelector("#libra");
    libra.className = "my-5 card rounded-4 border-dark d-none";
    let escorpio = document.querySelector("#escorpio");
    escorpio.className = "my-5 card rounded-4 border-dark d-none";
    let sagitario = document.querySelector("#sagitario");
    sagitario.className = "my-5 card rounded-4 border-dark d-none";
    let capricornio = document.querySelector("#capricornio");
    capricornio.className = "my-5 card rounded-4 border-dark";
    let acuario = document.querySelector("#acuario");
    acuario.className = "my-5 card rounded-4 border-dark d-none";
    let piscis = document.querySelector("#piscis");
    piscis.className = "my-5 card rounded-4 border-dark d-none";
  } else if ((dia >= 21 && mes == 1) || (dia <= 19 && mes == 2)) {
    let aries = document.querySelector("#aries");
    aries.className = "my-5 card rounded-4 border-dark d-none";
    let tauro = document.querySelector("#tauro");
    tauro.className = "my-5 card rounded-4 border-dark d-none";
    let geminis = document.querySelector("#geminis");
    geminis.className = "my-5 card rounded-4 border-dark d-none";
    let cancer = document.querySelector("#cancer");
    cancer.className = "my-5 card rounded-4 border-dark d-none";
    let leo = document.querySelector("#leo");
    leo.className = "my-5 card rounded-4 border-dark d-none";
    let virgo = document.querySelector("#virgo");
    virgo.className = "my-5 card rounded-4 border-dark d-none";
    let libra = document.querySelector("#libra");
    libra.className = "my-5 card rounded-4 border-dark d-none";
    let escorpio = document.querySelector("#escorpio");
    escorpio.className = "my-5 card rounded-4 border-dark d-none";
    let sagitario = document.querySelector("#sagitario");
    sagitario.className = "my-5 card rounded-4 border-dark d-none";
    let capricornio = document.querySelector("#capricornio");
    capricornio.className = "my-5 card rounded-4 border-dark d-none";
    let acuario = document.querySelector("#acuario");
    acuario.className = "my-5 card rounded-4 border-dark";
    let piscis = document.querySelector("#piscis");
    piscis.className = "my-5 card rounded-4 border-dark d-none";
  } else if ((dia >= 20 && mes == 2) || (dia <= 20 && mes == 3)) {
    let aries = document.querySelector("#aries");
    aries.className = "my-5 card rounded-4 border-dark d-none";
    let tauro = document.querySelector("#tauro");
    tauro.className = "my-5 card rounded-4 border-dark d-none";
    let geminis = document.querySelector("#geminis");
    geminis.className = "my-5 card rounded-4 border-dark d-none";
    let cancer = document.querySelector("#cancer");
    cancer.className = "my-5 card rounded-4 border-dark d-none";
    let leo = document.querySelector("#leo");
    leo.className = "my-5 card rounded-4 border-dark d-none";
    let virgo = document.querySelector("#virgo");
    virgo.className = "my-5 card rounded-4 border-dark d-none";
    let libra = document.querySelector("#libra");
    libra.className = "my-5 card rounded-4 border-dark d-none";
    let escorpio = document.querySelector("#escorpio");
    escorpio.className = "my-5 card rounded-4 border-dark d-none";
    let sagitario = document.querySelector("#sagitario");
    sagitario.className = "my-5 card rounded-4 border-dark d-none";
    let capricornio = document.querySelector("#capricornio");
    capricornio.className = "my-5 card rounded-4 border-dark d-none";
    let acuario = document.querySelector("#acuario");
    acuario.className = "my-5 card rounded-4 border-dark d-none";
    let piscis = document.querySelector("#piscis");
    piscis.className = "my-5 card rounded-4 border-dark";
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Debe seleccionar una fecha de nacimiento",
    });
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
