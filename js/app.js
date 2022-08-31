// declaracion de variables 
let formulario = document.querySelector('#formZodiaco');
let fechaNacimiento = document.querySelector('#fechaNacimiento');
let elemento=document.querySelector("#elemento")
let btnmostrarDatos = document.querySelector("#elegirElemento");

// agrego los eventos 
formulario.addEventListener('submit', mostrarFecha)

// funciones 
function mostrarFecha(e){
   e.preventDefault();
   console.log(fechaNacimiento.value)
}

function elegirElemento(elemento){

}

btnmostrarDatos.addEventListener("click", () =>
      mostrarElemento()
    );

    function mostrarElemento(){
      if(elemento.value==1){
         let elementoAgua = document.querySelector("#elementoAgua");
         elementoAgua.className = "row mt-5 colorAgua my-3";
         let elementoFuego = document.querySelector("#elementoFuego");
      elementoFuego.className = "row my-5 colorFuego d-none";
      let elementoTierra = document.querySelector("#elementoTierra");
      elementoTierra.className = "row mt-5 colorTierra d-none";
      let elementoAire = document.querySelector("#elementoAire");
      elementoAire.className = "row mt-5 colorAire d-none";
      }else if(elemento.value==2){
         let elementoAgua = document.querySelector("#elementoAgua");
         elementoAgua.className = "row mt-5 colorAgua my-3 d-none";
         let elementoFuego = document.querySelector("#elementoFuego");
      elementoFuego.className = "row my-5 colorFuego";
      let elementoTierra = document.querySelector("#elementoTierra");
      elementoTierra.className = "row mt-5 colorTierra d-none";
      let elementoAire = document.querySelector("#elementoAire"); 
      elementoAire.className = "row mt-5 colorAire d-none";
      }else if(elemento.value==3){
         let elementoAgua = document.querySelector("#elementoAgua");
         elementoAgua.className = "row mt-5 colorAgua my-3 d-none";
         let elementoFuego = document.querySelector("#elementoFuego");
      elementoFuego.className = "row my-5 colorFuego d-none";
      let elementoTierra = document.querySelector("#elementoTierra");
      elementoTierra.className = "row mt-5 colorTierra";
      let elementoAire = document.querySelector("#elementoAire");
      elementoAire.className = "row mt-5 colorAire d-none";
      }else if(elemento.value==4){
         let elementoAgua = document.querySelector("#elementoAgua");
         elementoAgua.className = "row mt-5 colorAgua my-3 d-none";
         let elementoFuego = document.querySelector("#elementoFuego");
      elementoFuego.className = "row my-5 colorFuego d-none";
      let elementoTierra = document.querySelector("#elementoTierra");
      elementoTierra.className = "row mt-5 colorTierra d-none";
      let elementoAire = document.querySelector("#elementoAire");
      elementoAire.className = "row mt-5 colorAire";
    }else{
      Swal.fire({
         icon: 'error',
         title: 'Oops...',
         text: 'Debe seleccionar un elemento',
       })
    }
   }
