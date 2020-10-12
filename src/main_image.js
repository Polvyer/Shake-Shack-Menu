const main_image = () => {
    // Create HTML nodes
    const div3 = document.createElement('div');
    const img3 = document.createElement('img');

    // Set attributes
    img3.setAttribute('src', './images/fooddrink_hdr.jpg');
    
    // Set classes
    div3.classList.add('row', 'd-flex', 'justify-content-center');

    // Set style
    div3.style.backgroundColor = 'rgb(96, 174, 43';

    // Append HTML nodes
    div3.appendChild(img3);

    return div3;
}

export {  main_image };