document.querySelector('body').insertAdjacentHTML('afterbegin', `<h1>Write your text below</h1>`);
const input = document.createElement('input');
document.querySelector('body').append(input);
const p = document.createElement('p');
document.querySelector('body').append(p);
input.addEventListener('input', () => p.textContent = input.value)