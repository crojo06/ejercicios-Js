const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchap','Twitter'];
let ul$ = document.createElement('ul');
for(let app of apps) {
    let li$ = document.createElement('li');
    ul$.appendChild(li$);
}
document.body.appendChild(ul$);