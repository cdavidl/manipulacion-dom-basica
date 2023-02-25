//Leyendo y escribiendo HTML desde JS

const titulo = document.querySelector('h1');
const parrafo = document.querySelector('p');
const parrafoClase = document.getElementsByClassName('parrafo');
const parrafoId = document.getElementById('parrafo');
const input = document.querySelector('input');

console.log(input.value);
console.log({
    titulo,
    parrafo,
    parrafoClase,
    parrafoId,
    input
});

titulo.innerHTML = 'Manipulando el <br>título con innerHTML'; //inserta HTML
parrafo.innerText = 'Manipulando el párrafo con innerText'; //inserta texto
console.log(titulo.getAttribute('class')); //obteniendo el valor de un atributo
titulo.setAttribute('class', 'rojo'); //editar atributos
titulo.classList.add('verde'); //agregar clase
titulo.classList.remove('rojo'); //quitar clase
input.value = '456'; //editar el valor del input
console.log(document.createElement('span')); //crear elemntos en el DOM

const imagen = document.createElement('img'); //crear elemento img
imagen.setAttribute('src', 'https://livingwithgravity.com/wp-content/uploads/2018/10/Yamaha-R1-Rapid-Red-Cover.jpg');
parrafoId.append(imagen); //insertar elemento imagen dentro de parrafoId

