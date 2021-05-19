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