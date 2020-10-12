import { covid_alert } from './covid_alert.js'
import { navbar } from './navbar.js'
import { main_image } from './main_image.js'
import { navbar_items } from './navbar_items.js'
import { burgers } from './items/burgers.js'
import { chicken } from './items/chicken.js'
import { flat_top_dogs } from './items/flat-top_dogs.js'

// Create/get HTML nodes
const html = document.querySelector('html');
html.style.backgroundColor = 'rgb(242, 242, 242';
const content = document.getElementById('content');
content.style.backgroundColor = 'rgb(242, 242, 242)';
const _covid_alert = covid_alert();
const _navbar = navbar();
const _main_image = main_image();
const _navbar_items = navbar_items();
const hr = document.createElement('hr');
hr.style.position = 'relative';
hr.style.bottom = '25px';

// Append HTML nodes
content.appendChild(_covid_alert);
content.appendChild(_navbar);
content.appendChild(_main_image);
content.appendChild(_navbar_items);
content.appendChild(hr);

// Create dynamic content
const contentd = document.createElement('div');
contentd.setAttribute('id', 'contentd');
content.appendChild(contentd);

function loadContent(e) {

    // Remove content if any
    while(contentd.firstChild) {
        contentd.removeChild(contentd.firstChild);
    }

    // Get id of node that triggered event listener
    let id = e.path[0].getAttribute('id');

    // Run the appropriate script to load content
    switch(id) {
        case 'a0':
            contentd.appendChild(burgers());
            break;
        case 'a1':
            contentd.appendChild(chicken());
            break;
        case 'a2':
            contentd.appendChild(flat_top_dogs());
            break;
        case 'a3':
            break;
        case 'a4':
            break;
        case 'a5':
            break;
        case 'a6':
            break;
        case 'a7':
            break;
        default:
            console.log('default');
    }
}

// Set event listeners for tabs
const a = document.querySelectorAll('.links');
const b = Array.from(a);
b.forEach((elem) => {
    elem.addEventListener('click', loadContent);
})