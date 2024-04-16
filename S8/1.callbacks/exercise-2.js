const userAnwsers = [];

function confirmExample(description) {
    return confirm(description);
}

function promptExample(description) {
    return prompt(description);
}

function father(description, callback) {
    let result = callback(description);
    userAnwsers.push(result);
}

father('¿Estás seguro?', confirmExample);

father('Dime cositas', promptExample);

father('¿Quieres continuar?', confirmExample);

father('Ingrese su edad:', promptExample);

console.log(userAnwsers); 