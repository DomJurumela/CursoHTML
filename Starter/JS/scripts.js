//O código abaixo escreve alguma mensagem no console com uma soma no meio do texto
console.log(`Lazarêncio ${1+1}`)
console.log(12.5 + 2);

//Object

const person = {
    name: "Zé",
    age: 40,
    weight: 88.5,
    isAdmin: true,
}

//Array

const animal = [
    'Lion',
    'Monkey',
    {
        name: 'Cat',
        age: 2
    }
]

const num1 = 1;
//var é global
var num2 = 7;

{
    //let e const são locais, só valem dentro do escopo (das chaves)
    let num3 = 10;
    console.log(num2/num3);
}



console.log(num1/num2);
console.log(`${person.name} tem ${person.age} anos.`);
console.log(person.name + " tem " + person.age + " anos.");
console.log(animal[0] + ", " + animal[1] + " and " + animal[2].name + " are animals.");

