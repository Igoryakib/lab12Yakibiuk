const truce = confirm("Оновивив дані ТЦК?")

if (truce) {
    document.querySelector('body').insertAdjacentHTML('afterbegin', "<h1>Молодець, Курськ чекає!)</h1>")
} else {
    document.querySelector('body').insertAdjacentHTML('afterbegin', "<h1>СБУ і ТЦК виїхало!</h1>")
}