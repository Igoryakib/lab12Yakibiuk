const obj = {
    name: 'Ihor',
    age: 18,
    address: 'Lviv'
};

for (let property in obj) {
    document.querySelector('body').insertAdjacentHTML('afterbegin', `<h1>${property}: ${obj[property]}</h1>`)
}