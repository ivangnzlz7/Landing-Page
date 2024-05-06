const nav = document.querySelector('nav');
const menuHambur = document.querySelector('#menu-hambur');
const cerrarHambur = document.querySelector('#cerrar');
const body = document.querySelector('body');

menuHambur.addEventListener('click', () => {
    nav.classList.add('visible');
})

cerrarHambur.addEventListener('click', () => {
    nav.classList.remove('visible');
})

window.addEventListener('DOMContentLoaded', () => {
   setTimeout(() => {
        body.classList.add('visibles')
   }, 1000); 
})