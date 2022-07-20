const formulario = document.getElementById("#formulario");

//crear el evento
formulario.addEventListener( "submit", validarFormulario )

  
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('email');
const password = document.getElementById('password');
const civil1 = document.getElementById('civil1');
const civil2 = document.getElementById('civi2');
const civil3 = document.getElementById('civil3');
const nacion = document.getElementById('nacion');
const cuestio = document.getElementById('cuestio');





const msj = document.getElementById('msj');
const msj2 = document.getElementById('msj2');
const msj3= document.getElementById('msj3');
const msj4 = document.getElementById('msj4');
const msj5 = document.getElementById('msj5');
const msj6 = document.getElementById('msj6');
const msj7 = document.getElementById('msj7');
const msj8 = document.getElementById('msj8');
const msj9 = document.getElementById('msj9');

const form = document.getElementById('form');

form.addEventListener("submit", e=>{
e.preventDefault();
let regexEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

if (  nombre.value.length<2) {
  msj.innerText="el nombre debe de ser mayor a 2 digitos"

}
if (  apellido.value.length<2) {
    msj2.innerText="el apellido debe de ser mayor a 2 digitos"

}

if (!regexEmail.test(email.value)) {
  msj3.innerText=" * el EMAIL no es correcto"

}

if (  password.value.length<8) {
    msj4.innerText="el pasword debe ser mayor a 8 caracteres"

}
if (  civil1.value.length<8) {
  msj5.innerText="Debe escoger un estado Civil"

}if (  civil12.value.length<8) {
msj5.innerText="Debe escoger un estado Civil"

}if (  civil3.value.length<8) {
msj6.innerText="Debe escoger un estado Civil"

}if (  nacion.value.length<8) {
msj7.innerText="Debe escoger una nacionalidad"

}if (  cuestion.value.length<8) {
msj8.innerText="Debe dejar un comentario"

}

else{ 
alert('verifique los campos')

}
})


