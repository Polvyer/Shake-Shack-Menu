const navbar_items = () => {
    // Create HTML nodes
    const nav = document.createElement('nav');
    nav.classList.add('row', 'navbar', 'navbar-expand-lg')
    nav.style.backgroundColor = 'rgb(242, 242, 242)';
    const ulist = document.createElement('ul');
    ulist.classList.add('navbar-nav', 'col-md-12', 'd-flex', 'justify-content-center');
    let list = new Array(8);
    let links = new Array(8);
    for (let i = 0; i < list.length; i++) {
        list[i] = document.createElement('li');
        list[i].classList.add('nav-item', 'active', 'pl-2', 'ml-2', 'mr-2', 'pb-5', 'mb-3');
        list[i].style.fontSize = '12px';
        list[i].style.fontWeight = '600';

        links[i] = document.createElement('a');
        links[i].classList.add('nav-link', 'links');
        links[i].style.color = 'rgb(76, 76, 76)';
        links[i].setAttribute('href', '#contentd');
        links[i].setAttribute('id', 'a' + i);
    }

    // Set text content
    links[0].textContent = 'BURGERS';
    links[1].textContent = 'CHICKEN';
    links[2].textContent = 'FLAT-TOP DOGS';
    links[3].textContent = 'CRINKLE CUT FRIES';
    links[4].textContent = 'FROZEN CUSTARD';
    links[5].textContent = 'DRINKS';
    links[6].textContent = 'BEER & WINE';
    links[7].textContent = 'FOR DOGS';

    // Append HTML nodes
    for (let i = 0; i < list.length; i++) {
        list[i].appendChild(links[i]);
        ulist.appendChild(list[i]);
    }
    
    nav.appendChild(ulist);

    return nav;
}

export { navbar_items };