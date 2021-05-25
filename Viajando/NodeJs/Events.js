//Event Emiter

const { EventEmitter } = require('events');
const ev = new EventEmitter();

//Emitindo Eventos

ev.emit('say something');

//Ouvindo e executando ações para eventos

ev.on('say something', (message) => console.log("Eu ouvi você: " + message));
ev.emit('say something', "Mensagem");
ev.emit('say something', "Mensagem2");

//Ouvindo eventos uma única vez

const ev2 = new EventEmitter();
ev2.once('say something', (message) => console.log("Eu ouvi você: " + message));
ev2.emit('say something', "Mensagem3");
ev2.emit('say something', "Mensagem4");
ev2.emit('say something', "Mensagem5");

//Herdando do EventEmitter
const { inherits } = require('util');

function Character(name){
    this.name = name;
}

inherits(Character, EventEmitter)

const chapolin = new Character('Chapolin');
chapolin.on('help', () => console.log(`Eu! O ${chapolin.name} Colorado!`));

console.log('Oh, e agora, quem poderá me defender?');
chapolin.emit('help');