const close = document.querySelector('#close');
const menu = document.getElementById('menu');
const container = document.querySelector('.container');

menu.addEventListener('click', () => container.classList.add('show-nav'));
close.addEventListener('click', () => container.classList.remove('show-nav'));
