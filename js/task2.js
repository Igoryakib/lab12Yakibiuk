const arrayNum = [1, 25, 4, 8, 16, 22, 40, 30];

const evenArray = arrayNum.filter(item => item % 2 === 0 && item);

const theBiggestEvenNum = evenArray.reduce((acc, item) => item > acc ? acc = item : acc, 0);

document.querySelector('body').insertAdjacentHTML('afterbegin', `<div>
<h1>Array of numbers: [${arrayNum}]</h1>
<h2>Array of even numbers: [${evenArray}]</h2>
<span>The biggest number of even array: ${theBiggestEvenNum}</span>
</div>`)