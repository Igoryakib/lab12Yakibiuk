const lang = prompt("Enter currency");

switch (lang) {
    case 'dollar':
        document.querySelector('body').insertAdjacentHTML('afterbegin', '<h1>American Dollar</h1>')
        break;
    case 'euro':
        document.querySelector('body').insertAdjacentHTML('afterbegin', '<h1>Euro</h1>')
        break;
    case 'hryvna':
        document.querySelector('body').insertAdjacentHTML('afterbegin', '<h1>Ukrainian hryvna</h1>')
        break;
    case 'pound':
        document.querySelector('body').insertAdjacentHTML('afterbegin', '<h1>British Pound</h1>')
        break;
    default:
        document.querySelector('body').insertAdjacentHTML('afterbegin', '<h1>Currency undefined</h1>')
        break;
}