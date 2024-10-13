const a = +prompt("Введіть перший катет");
const b = +prompt("Введіть другий катет");

const c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

document.querySelector('body').insertAdjacentHTML('afterbegin', `<h1>Катет1: ${a} Катет2: ${b} Гіпотенуза = ${c}</h1>`)