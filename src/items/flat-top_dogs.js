const flat_top_dogs = () => {
    // Preset data
    let dogs_h = ["Hot Dog", "Shack-cago Dog®"];
    let dogs_p = ["100% beef from the pros at Vienna Beef in Chicago (hot tip: add our Shack-made cheese sauce, a special blend of cheddar and American).",
                     "Dragged through the garden with Rick's Picks Shack relish, onion, cucumber, pickle, tomato, sport pepper, celery salt, mustard."];
    let dogs_s = ['390 cal', '410 cal'];

    const ul = document.createElement('ul');

    for (let i = 0; i < dogs_h.length; i++) {
        let li = document.createElement('li');
        let h3 = document.createElement('h3');
        h3.textContent = dogs_h[i];
        let p = document.createElement('p');
        p.textContent = dogs_p[i];
        let s = document.createElement('strong');
        s.textContent = dogs_s[i];
        li.appendChild(h3);
        li.appendChild(p);
        li.appendChild(s);
        ul.appendChild(li);
    }

    return ul;
}

export { flat_top_dogs };