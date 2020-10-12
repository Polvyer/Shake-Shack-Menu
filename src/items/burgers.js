const burgers = () => {
    // Preset data
    let burgers_h = ['ShackBurger®', 'Hamburger', 'Shack Stack®', 'SmokeShack®', "'Shroom Burger"];
    let burgers_p = ['Single or Double Cheeseburger topped with lettuce, tomato, ShackSauce™.',
                 'Single or Double with your choice of lettuce, tomato, pickle, or onion. Add cheese or Niman Ranch applewood smoked bacon.',
                 'Cheeseburger and a ’Shroom Burger topped with lettuce, tomato, ShackSauce™.',
                 'Single or Double Cheeseburger topped with Niman Ranch applewood smoked bacon, chopped cherry peppers, ShackSauce™.',
                 'Crisp-fried portobello mushroom filled with melted muenster and cheddar cheeses, topped with lettuce, tomato, ShackSauce™.'];
    let burgers_s = ['530 cal/790 cal', '400 cal/590 cal', '800 cal', '610 cal/870 cal', '550 cal'];

    const ul = document.createElement('ul');

    for (let i = 0; i < burgers_h.length; i++) {
        let li = document.createElement('li');
        let h3 = document.createElement('h3');
        h3.textContent = burgers_h[i];
        let p = document.createElement('p');
        p.textContent = burgers_p[i];
        let s = document.createElement('strong');
        s.textContent = burgers_s[i];
        li.appendChild(h3);
        li.appendChild(p);
        li.appendChild(s);
        ul.appendChild(li);
    }

    return ul;
}

export { burgers };