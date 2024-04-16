const numbersList = [];

function sum(a, b){
    return a + b;

}

function substract(a, b){
    return a - b;

}

function father(a, b, callback){
    let result = callback(a, b);
    numbersList.push(result);

}

father(5, 5, sum);
father(5, 3, sum);
father(10, 2, substract);
father(2, 1, substract);

console.log(numbersList);