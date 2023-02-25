//Eventos en JavaScript: interactuando con usuarios

const titulo = document.querySelector('h1');
const form = document.querySelector('#formulario');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const btn = document.querySelector('#calcular');
const resultado = document.querySelector('#resultado');

form.addEventListener('submit', btnClick); //escucha el evento click y ejecuta la función btnClick

function btnClick (event) {
    console.log(event);
    event.preventDefault();
    const result = +input1.value + +input2.value; //anteponiendo el + se cambia el tipo de dato de string a number
    resultado.innerText = 'El resultado de la suma es: ' + result;
    //console.log('Escuchando evento click');
}