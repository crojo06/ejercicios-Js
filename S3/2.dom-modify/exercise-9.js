let divs$ = document.querySelectorAll('div.fn-insert-here');

for(let div$ of divs$) {
let p$ = document.createElement('p');
    p$.textContent = 'Voy dentro';
    div$.appendChild(p$);
}    