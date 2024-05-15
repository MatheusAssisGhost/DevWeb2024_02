let matrix1 = [
    [1,2,3],
    [4,5,6],
];

console.log('Antes:');
console.log(matrix1);

console.clear();
matrix1[0][2] = 10;
console.log('Depois:');
console.log(matrix1);

console.clear();

let frutas = [
    ['banana','melancia','morango','limão'],
    ['R$4,00','R$45,00','R$10,00','R$5,00'],
];

console.log('A fruta:'+(frutas[0][0])+' '+'está custando'+(frutas[1][0]));

console.clear();

let test1 = [0,1,2,3,4,5,6,7,8,9];
let test2 = test1.join('>>>');

console.log(test2);
console.log(typeof test2);
console.log(test1.length);

let x = test1.pop();
console.log(test1);
console.log(x)

console.clear()
let y = test1.push('25');
console.log(test1);
console.log(y);

console.clear();
let Carros = [
    ['onix','fiesta','kwid','vectra'],
    ['Chevrolet','Ford','Renault','Chevrolet'],
];
console.log ('O carro'+' '+(Carros[0][3])+' '+'Pertence a Marca'+' '+(Carros [1][3]));

console.clear();
const frutas3 = ['Banana','Mamão'];

let z = frutas3.shift();
console.log(frutas3);
console.log(z);

console.clear();

const frutas5 = ['banana','laranja','maçã','manga','melancia','morango','kiwi','pêra'];

if (frutas5[0] === 'morango', delete frutas5[0]);

console.log (frutas5);

console.clear();
