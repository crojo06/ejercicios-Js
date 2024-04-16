function findTextArray(array, text) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === text) {
            return i;
        }
    }
    return -1;
}

function removeFromArray(array, text) {
    let index = findTextArray(array, text);
    if(index > -1) {
        array.splice(index, 1);
    }
    
    return array;
}

// Ejemplo de uso de la función removeFromArray
const array = ["manzana", "banana", "pera", "uva"];
const text = "pera";
console.log(removeItem(array, text)); // Salida esperada: ["manzana", "banana", "uva"]