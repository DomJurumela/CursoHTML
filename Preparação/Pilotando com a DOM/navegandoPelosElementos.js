//ParentElement e ParentNode

let element = document.querySelector('h1');
console.log(element.parentElement);
console.log(element.parentNode);

//pegando elementos filhos

element = document.querySelector('body');
console.log(element.childNodes);
console.log(element.children);
//firstChild firstElementChild
console.log(element.firstChild);
console.log(element.firstElementChild);
//lastChild lastElementChild
console.log(element.lastChild);
console.log(element.lastElementChild);

//buscando irmãos
element = document.querySelector('header');
//nextSibling e nextElementSibling
console.log(element.nextSibling);
console.log(element.nextElementSibling);
//previousSibling e previousElementSibling
element = document.querySelector('body script')
console.log(element.previousSibling);
console.log(element.previousElementSibling);