let array = ["Mesirve", "Cristiano Romualdo", "Fernando Muralla", "Ronalguiño"];

function swap(array, i1, i2) {
    let value1 = array[i1];
    let value2 = array[i2];

    array[i1] = value2;
    array[i2] = value1;

    return array;
}
