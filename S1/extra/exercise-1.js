const users = [{name: "Abel", years: 43}, {name: "Maria", years: 18}, {name: "Pedro", years: 14}, {name: "Samantha", years: 32}, {name: "Raquel", years: 16}];
for(let user of users) {
    if(user.years >= 18) {
    console.log("usuario mayor de edad: " + user.name);
} else {
    console.log("usuario menor de edad " + user.name);
}
}

