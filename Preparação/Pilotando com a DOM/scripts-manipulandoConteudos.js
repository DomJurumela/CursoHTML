//      Manipulando conteúdos
//textContent

let element = document.getElementById('a1');

element.textContent += " Chico Fumaça"
console.log(element.textContent);

//innerText

element = document.getElementById('a2');
element.innerText = "Teste innerText"

//innerHTML

element = document.getElementById('a3');
element.innerHTML = "Teste <small>innerHTML</small>"

//value
let elementInput = document.getElementById('input1');
console.log(elementInput.value)

let eleAux;
elementInput.oninput = function(){
    eleAux = elementInput.value;
    eleAux+= "pingas";
    console.log(eleAux);
}

//Manipulando atributos
const header = document.querySelector("header");
console.log(header);

header.setAttribute('id','header');
const headerId = document.querySelector('#header')
console.log(headerId);

console.log(headerId.getAttribute('id'));
headerId.removeAttribute('id');
console.log(headerId);