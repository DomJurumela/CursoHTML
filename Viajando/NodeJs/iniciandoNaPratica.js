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

console.log("\n\n\n");

//Criando Módulos

console.log("Criando Módulos: \n");

const myModule = require('./exports.js');
console.log(myModule);

console.log("\n\n\n");

//Pegando Informações do Processo

console.log("Pegando Informações do Processo: \n");

console.log(process);
console.log(process.argv);
const firstname = process.argv[2];
const lastname = process.argv[3];
console.log(`Seu nome é ${firstname} ${lastname}`);

console.log("\n\n\n");

//Passando flags como argumento

console.log("Passando flags como argumento: \n")

console.log(process.argv);