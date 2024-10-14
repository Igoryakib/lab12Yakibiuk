const num = +prompt("Enter number")

let amountSteps = 0;
let resAINum = 0;

const fTime = new Date();
while (resAINum !== num) {
    resAINum =  Math.round(Math.random() * (99999 - 0) + 0);
    amountSteps += 1;
}
const sTime = new Date();

const resTime = (sTime - fTime) / 1000;

document.querySelector('body').insertAdjacentHTML('afterbegin', `<div>
<h2>Result: ${resAINum}</h2>
<h2>Steps: ${amountSteps}</h2>
<h2>time: ${resTime.toString()} seconds</h2>
</div>`)
console.log(`result: ${resAINum}`);
console.log(`steps: ${amountSteps}`);
console.log(`time: ${resTime.toString()} seconds`);