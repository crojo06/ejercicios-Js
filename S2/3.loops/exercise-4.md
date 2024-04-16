Usa un bucle for of para recorrer todos los juguetes y elimina los que incluyan la palabra `gato`. Recuerda que puedes usar la función `.includes()` para comprobarlo.
```js
const toys = [{id: 5, name: 'Buzz MyYear'}, {id: 11, name: 'Action Woman'}, {id: 23, name: 'Barbie Man'}, {id: 40, name: 'El gato con Guantes'},{id: 40, name: 'El gato felix'}]
```
for(let toy of toys) {
    console.log(toy);
    if(toy.name.includes("gato")) {
        let index = toys.indexOf(toy);
        delete toys[index];
    }
}
//es otra manera de hacerlo. no es las mas correcta, ya que elimina el indice.