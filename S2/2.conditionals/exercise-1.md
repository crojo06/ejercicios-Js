Comprueba en cada uno de los usuarios que tenga almenos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. Una vez lo tengas compruebalo con un console.log.

```js
const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]
```
//alternativa 
for(let alumn of alumns) {
    if((alumn.T1 && alumn.T2) || (alumn.T1 && alumn.T3) || (alumn.T2 && alumn.T3))
    alumn.isAproved = true;
} else {
    alumn.isAproved = false;
}
console.log(alumns);