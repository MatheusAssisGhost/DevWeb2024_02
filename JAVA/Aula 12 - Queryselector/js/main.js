let paragrafo = document.querySelector('p');
paragrafo.style.background = '#FBBEBA';

let parClasse = (document.querySelector('p.exemplo').innerHTML =
    'Mudei o texto aqui');

let elemento = (document.querySelector('.myclass').style.fontSize = 'x-large');

const Clique = () => {
    document.querySelector('#my-span').style.backgroundColor = 'black';
    document.querySelector('#my-span').style.color = 'yellow';
    document.querySelector('#btnbtn').style.margin = '-200px 200px';
};

// listaElementos = document.querySelectorAll(seletores);

let listaLi = document.querySelectorAll('li');
for (i = 0; i < listaLi.length; i++) {
    listaLi[i].style.border = '1px solid #0000FF';
    listaLi[i].style.padding = '5px';
}
console.log(listaLi);

let myLi = document.querySelectorAll('#my-li');
myLi.forEach((li) => (li.innerHTML = 'Mudou aqui!'));

let myItem = document.querySelectorAll('.item');
myItem.forEach((item) => (item.style.backgroundColor = '#E7BAFB'));