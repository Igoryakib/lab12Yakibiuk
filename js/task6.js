const AINum = Math.round(Math.random() * (10 - 0) + 0);
console.log(AINum);
let userNum = +prompt("Enter your number");

while(userNum !== AINum) {
    console.log(AINum);
    console.log(userNum);
    userNum = +prompt("You wrong, try again");
}

document.querySelector('body').insertAdjacentHTML('afterbegin', `<div>
<h2>AI number: ${AINum}</h2>
<h2>User number: ${userNum}</h2>
</div>`);