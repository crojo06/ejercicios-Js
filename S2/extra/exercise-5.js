function rollDice(numFaces) {
    return Math.floor(Math.random() * numFaces) + 1;
}

for (let i = 0; i < 10; i++) {
    console.log(rollDice(6));
}