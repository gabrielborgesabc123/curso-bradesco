'use strict';

const switcher = document.querySelector('.button');

switcher.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');

    let className = document.body.className;
    if (className === 'light-theme') {
        this.textContent = 'Dark';
    } else {
        this.textContent = 'Light';
    }

    console.log('Current class name: ' + className);
});
