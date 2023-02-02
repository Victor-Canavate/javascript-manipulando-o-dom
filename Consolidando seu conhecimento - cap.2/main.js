let calcular = document.querySelector('#calcular');

let resultado = document.querySelector('.resultado');

calcular.addEventListener('click', () => {
    console.log('Fui clicado');
    resultado.textContent = 'Fui clicado'
})



