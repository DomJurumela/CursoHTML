//Alterando estilos com style
let element = document.querySelector('body');

//element.style.backgroundColor = "#44ccff";

//classList



element.classList.add('active', 'green');
element.classList.remove('green');
element.classList.toggle('green');

console.log(element.classList);