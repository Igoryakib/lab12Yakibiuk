alert("Шукаємо корені квадратичного рівняння за теоремою вієта");

const b = +prompt("Введіть коефіцієнт b");
const c = +prompt("Введіть коефіцієнт c");

let x1 = 0;
let x2 = 0;

while (x1*x2 !== c && x1+x2 !== b) {
    x1+=1;
    x2+=1;
    console.log(x1, x2);
}

document.querySelector('body').insertAdjacentHTML('afterbegin', `<h1>Квадратне рівняння: x^2${b > 0 ? `+${b}` : `-${b}`}x${c > 0 ? `+${c}` : `-${c}`}</h1> <h3>Корені x1: ${x1}, x2:${x2}</h3>`)