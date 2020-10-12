const chicken = () => {
    // Preset data
    let chicken_h = ["Chick'n Shack", "Chick'n Bites", "Chicken Dog"];
    let chicken_p = ["Antibiotic-free, crispy chicken breast with lettuce, pickles, and buttermilk herb mayo on a non-GMO Martin’s Potato Roll.",
                     "Antibiotic-free, crispy, all white-meat chicken bites, hand breaded + served with BBQ or honey mustard sauce.",
                     "Chicken sausage with sage and apple—no antibiotics, ever."];
    let chicken_s = ['590 cal', '300 cal', '310 cal'];

    const ul = document.createElement('ul');

    for (let i = 0; i < chicken_h.length; i++) {
        let li = document.createElement('li');
        let h3 = document.createElement('h3');
        h3.textContent = chicken_h[i];
        let p = document.createElement('p');
        p.textContent = chicken_p[i];
        let s = document.createElement('strong');
        s.textContent = chicken_s[i];
        li.appendChild(h3);
        li.appendChild(p);
        li.appendChild(s);
        ul.appendChild(li);
    }

    return ul;
}

export { chicken };