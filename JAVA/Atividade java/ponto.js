class NovoCarro {
    constructor (nome, ano){
        this.nome = nome;
        this.ano = ano;
    }


idadecarro(ano) {
    return ano - this.ano;
}
}

let datahoje = new Date();
// let ano = datahoje.getFullYear();
let dia = datahoje.getDate();
let mes = datahoje.getMonth();
let ano1 = datahoje.getFullYear();
let hora = datahoje.getHours();
let minute = datahoje.getMinutes();


let meuNovoCarro = new NovoCarro('Ford',2014);

// console.log(meuNovoCarro.idadecarro(ano));

// console.log(datahoje)
console.log(dia)
console.log(mes)
console.log(ano1)
console.log(hora+':'+minute)