let lista = document.querySelector('.lista');
let botaoSumir = document.querySelector('#faz-sumir');
let botaoAparecer = document.querySelector('#faz-aparecer')

let itensLista = document.querySelectorAll('.item');
console.log(itensLista)

function fazSumir () {
    for(let i = 0; i < itensLista.length; i++){
        let item = itensLista[i];
        item.classList.add('sumir');
    }
}

botaoSumir.onclick = fazSumir

function fazAparecer () {
    for(let i = 0; i < itensLista.length; i++){
        let item = itensLista[i];
        item.classList.remove('sumir')
    }
}

botaoAparecer.onclick = fazAparecer

