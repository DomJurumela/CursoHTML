//Eventos via HTML
function print(){
    console.log("print")
}

//Eventos de teclado
const input = document.querySelector('input');

input.onkeydown = function rodar(){
    console.log('rodei')
}

//Eventos via js

const h1 = document.querySelector('h1');

h1.addEventListener('mouseover', print);

//Eventos via js (outro método)

h1.ondblclick = function(){
    console.log('dbl print');
}

//Argumento event

input.onkeypress = function(event){
    console.log(event.key)
}