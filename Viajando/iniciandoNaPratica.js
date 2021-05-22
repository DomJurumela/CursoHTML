//Executando o primeiro arquivo e entendendo globals
console.log("Executando o primeiro arquivo e Entendendo globals: \n");
console.log('Alguma coisa aqui');
global.console.log('Alguma coisa aqui');
console.log(global);
console.log(__dirname);
console.log(__filename);

console.log("\n\n\n");

//O que são e como utilizar módulos
console.log("O que são e como utilizar módulos: \n");

const path = require('path');
console.log(path);
console.log(path.basename(__filename));
