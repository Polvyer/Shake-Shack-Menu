const covid_alert = () => {
    // Create HTML nodes
    const div1 = document.createElement('div');
    const div1_2 = document.createElement('div');
    const p1 = document.createElement('p');
    const strong1 = document.createElement('strong')
    const span1 = document.createElement('span')

    // Set text content
    strong1.textContent = 'Important announcements regarding COVID-19 & our commitment to your safety. ';
    span1.textContent = 'Learn More';

    // Set classes
    div1.classList.add('row');
    div1_2.classList.add('d-flex', 'justify-content-center', 'col-12', 'mt-1');
    p1.classList.add('position-relative');
    span1.classList.add('font-weight-normal');

    // Set style
    div1.style.backgroundColor = 'rgb(96, 174, 43';
    p1.style.top = '6px';
    span1.style.textDecoration = 'underline';

    // Append HTML nodes
    p1.appendChild(strong1);
    p1.appendChild(span1);
    div1_2.appendChild(p1);
    div1.appendChild(div1_2);

    return div1;
}

export { covid_alert };