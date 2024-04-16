let p$ = document.createElement('p');
p$.textContent = 'Voy en medio';

let secondDiv$ = document.querySelector('div:nth-child(2)');
secondDiv$.parentNode.insertBefore(p$, secondDiv$);

//document.body.insertBefore(p$, secondDiv$);