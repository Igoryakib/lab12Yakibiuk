const lang = prompt("Enter language");

switch (lang) {
    case 'ua':
        document.querySelector('body').insertAdjacentHTML('afterbegin', '<h1>Ukrainian</h1>')
        break;
    case 'en':
        document.querySelector('body').insertAdjacentHTML('afterbegin', '<h1>English</h1>')
        break;
    case 'pl':
        document.querySelector('body').insertAdjacentHTML('afterbegin', '<h1>Polish</h1>')
        break;
    case 'de':
        document.querySelector('body').insertAdjacentHTML('afterbegin', '<h1>Deutschland</h1>')
        break;
    default:
        document.querySelector('body').insertAdjacentHTML('afterbegin', '<h1>Language undefined</h1>')
        break;
}