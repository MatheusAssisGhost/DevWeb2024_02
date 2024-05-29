let titulo = document.getElementById('titulo');

titulo.innerHTML = 'Olá meus caros alunos!';

titulo.style.textAlign = 'center';
titulo.style.backgroundColor = '#ccccc9';
titulo.style.borderBottom = 'solid 3px #000';
titulo.style.margin ='20px';

console.clear();

let items = document.getElementsByClassName('item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

for (let i = 0; i <items.length; i++){
    items[i].style.backgroundColor='#ccccc9';
}

let nome = document.getElementsByName('fitem');
console.clear();
console.log(nome);
nome[0].textContent='Olá pessoas';
nome[0].style.backgroundColor='yellow';
nome[1].textContent='Tudo bem ?';
nome[1].style.backgroundColor='BAC1FB';

console.clear();

const item2 = document.getElementsById('item2');
item2.remove(); 