// Aquí tu código

const agregar = document.getElementById('agregar');
const lista = document.getElementById('lista');

agregar.addEventListener('click', function () {
   const item = document.createElement('li');
   const texto = prompt('Escribe el nuevo elemento de la lista');
   item.textContent = texto;
   lista.appendChild(item);
})

// Esto no está en el ejercicio, pero me parecía lógico por si te equivocas o quieres volver a empezar sin recargar.

const borrarUno = document.getElementById('borrarUno');
const clear = document.getElementById('clear');

borrarUno.addEventListener('click', function () {
   if (lista.hasChildNodes() == true) {
      lista.removeChild(lista.lastChild);
   }
})

clear.addEventListener('click', function () {
   if (lista.hasChildNodes() == true) {
      lista.innerHTML='';
   }
})

