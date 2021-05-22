const flagGet = require('./flagGetter.js');

nome = flagGet("--name")
greeting = flagGet("--greeting");

console.log (nome + "\n" + greeting);