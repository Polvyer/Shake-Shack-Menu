const navbar = () => {
    // Create HTML nodes
    const nav2 = document.createElement('nav');
    const ul2 = document.createElement('ul');
    const li2 = document.createElement('li');
    const a2 = document.createElement('a');
    const li2_2 = document.createElement('li');
    const a2_2 = document.createElement('a');
    const li2_3 = document.createElement('li');
    const a2_3 = document.createElement('a');
    const img_3 = document.createElement('img');
    const li2_4 = document.createElement('li');
    const a2_4 = document.createElement('a');
    const li2_5 = document.createElement('li');
    const btn2_5 = document.createElement('button');

    // Set text content
    a2.textContent = 'LOCATIONS';
    a2_2.textContent = 'CAREERS';
    a2_4.textContent = 'RETAIL';
    btn2_5.textContent = 'ORDER NOW';

    // Set attributes
    img_3.setAttribute('src', './images/shakeshack_logo.png');

    // Set classes
    nav2.classList.add('row', 'navbar', 'navbar-expand-lg', 'd-flex', 'justify-content-center');
    ul2.classList.add('navbar-nav');
    li2.classList.add('nav-item', 'active', 'p-2', 'mr-2', 'ml-2', 'position-relative');
    a2.classList.add('nav-link');
    li2_2.classList.add('nav-item', 'active', 'p-2', 'mr-2', 'ml-2', 'position-relative');
    a2_2.classList.add('nav-link');
    li2_3.classList.add('nav-item', 'active', 'p-2', 'mr-2', 'ml-2', 'position-relative');
    a2_3.classList.add('navbar-brand');
    li2_4.classList.add('nav-item', 'active', 'p-2', 'mr-2', 'ml-2', 'position-relative');
    a2_4.classList.add('nav-link');
    li2_5.classList.add('nav-item', 'active', 'p-2', 'mr-2', 'ml-2', 'position-relative');
    btn2_5.classList.add('btn', 'btn-outline-success');

    // Set style
    nav2.style.backgroundColor = 'rgb(242, 242, 242)';
    li2.style.top = '14px';
    li2.style.right = '24px';
    li2_2.style.top = '14px';
    li2_2.style.right = '16px';
    li2_3.style.top = '3px';
    li2_3.style.left = '8px';
    li2_4.style.top = '14px';
    li2_4.style.left = '20px';
    li2_5.style.top = '14px';
    li2_5.style.left = '34px';
    a2.style.color = 'rgb(64, 127, 0)';
    a2_2.style.color = 'rgb(64, 127, 0)';
    a2_4.style.color = 'rgb(64, 127, 0)';
    btn2_5.style.color = 'rgb(64, 127, 0)';

    // Append HTML nodes
    a2_3.appendChild(img_3);
    li2.appendChild(a2);
    li2_2.appendChild(a2_2);
    li2_3.appendChild(a2_3);
    li2_4.appendChild(a2_4);
    li2_5.appendChild(btn2_5);
    ul2.appendChild(li2);
    ul2.appendChild(li2_2);
    ul2.appendChild(li2_3);
    ul2.appendChild(li2_4);
    ul2.appendChild(li2_5);
    nav2.appendChild(ul2);

    return nav2;
}

export { navbar };