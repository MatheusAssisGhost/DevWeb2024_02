// const recepcao = () => {
//     alert('Seja bem vindo');
//     console.log('Bem vindo ');
// };

// const eventClique = () => {
//     console.log('Você clicou no botão');
// };

// if (document.getElementById ( eventClique() >= 50)) {
    
//     console.log('PARA DE CLICAR, PELO AMOR DE DEUS')
// }

console.clear();

class Carro {
    constructor(nome,ano){
        this.nome = nome;
        this.ano = ano;
    }
}

let meuCarro1 = new Carro ('Ford',2014);
let meuCarro2 = new Carro ('Audi', 2019);
let meuCarro3 = new Carro ('Monza', 1980);

console.log(meuCarro1.nome);
console.log(meuCarro1.ano);

console.log(meuCarro2.nome);
console.log(meuCarro2.ano);

console.log(meuCarro3.nome);
console.log(meuCarro3.ano);

console.log(meuCarro1.nome,meuCarro1.ano,meuCarro2.nome,meuCarro2.ano,meuCarro3.nome,meuCarro3.ano)

console.clear();

class Frutas {
    constructor (nome,preco){
        this.nome = nome;
        this.preco = preco;
    }
}

let produto1 = new Frutas ('Melancia','R$40,00')
let produto2 = new Frutas ('Maçã', 'R$5,00');
let produto3 = new Frutas ('Banana', 'R$4,00');

console.log( produto1.nome,produto1.preco)