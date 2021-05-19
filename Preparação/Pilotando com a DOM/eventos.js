//Eventos via HTML
function print(){
    console.log("print")
}

//Eventos de teclado
let input = document.querySelector('input');

input.onkeydown = function rodar(){
    console.log('rodei')
}

//Eventos via js