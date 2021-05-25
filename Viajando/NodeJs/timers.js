/*
//setTimeout vai rodar uma função depois de x milissegundos
const timeOut = 3000
const finished = () => console.log('done!')
setTimeout(finished, timeOut);
console.log('Mostrar');



clearTimeOut vai cancelar um timeout
const timer = setTimeout(finished, timeOut);
clearTimeout(timer);



//setInterval
const timeOut2 = 1000;
let i = 1;
const checking = () => console.log(i++);
const timer2 = setInterval(checking, timeOut2);
*/


//clearInterval
const timeOut4 = 1000;
const timeOut5 = 10000;
let i2 = 1;
const checking = () => console.log(i2++);
const timer3 = setInterval(checking, timeOut4);
finished = () => clearInterval (timer3);
setTimeout(finished, timeOut5);