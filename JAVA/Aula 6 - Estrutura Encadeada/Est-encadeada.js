

// Desvios encadeados
console.clear();
const num = 'Olá';
if (num % 2 == 0 && !isNaN(num)) console.log('Número par!');
else if (num % 2 != 0 && !isNaN(num)) console.log('Número ímpar');
else console.log('Não é um número!');

console.clear();
const resultado = 19 < 15 ? 'Sim' : 'Não';
console.log(resultado);

console.clear();

const b = 'n/s';
const condicao = b >= 7 ? 'Aprovado' : 'Reprovado';

switch (condicao) {
    case "Aprovado":
        console.log('O Aluno foi aprovado')
        break;
    case 'Reprovado':
        console.log('O Aluno foi reprovado')
        break;
    default: console.log('O Aluno está no conselho')
}

console.clear();

const num1 = [30, -1, 5, 3, 121]
console.log(`primeiro elemento de num1:${num1[0]}`);

console.clear();
const nota = 7;
const aluno = [
['Matheus', 'Arthur', 'Renata', 'Hugo', 'Larissa'],
[6, 5, 8, 9, 7]
];

const cond = aluno[1][0]>=7 ?'Aprovado':'Reprovado';

console.log (`O aluno ${aluno[0][0]} está`+ ' '+(cond));
