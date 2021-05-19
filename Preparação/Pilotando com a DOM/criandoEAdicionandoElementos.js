//criando e adicionando

//createElement
let div = document.createElement('div');
div.innerText = "Olá Devs";

//append prepend
const body = document.querySelector('body');

body.append(div);
body.prepend(div);

//insertBefore
const script = body.querySelector("script");
body.insertBefore(div, script);

//truque "insertAfter"
const header = body.querySelector("header")
body.insertBefore(div, header.nextSibling);