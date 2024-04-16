function findTextArray(array, text) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === text) {
            return i;
        }
    }
    return -1;
}

// Ejemplo de uso de la función
const array = ["manzana", "banana", "pera", "uva"];
const text = "pera";
console.log(findArrayIndex(array, text)); // Salida esperada: 2