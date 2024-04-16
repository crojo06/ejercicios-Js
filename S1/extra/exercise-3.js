const movies = [{name: "Your Name", durationInMinutes: 130},{name: "Pesadilla antes de navidad", durationInMinutes: 225}, {name: "Origen", durationInMinutes: 165}, {name: "El señor de los anillos", durationInMinutes: 967}, {name: "Solo en casa", durationInMinutes: 214}, {name: "El jardin de las palabras", durationInMinutes: 40}];
let smallMovies = [];
let mediumMovies = [];
let bigMovies = [];
for(let movie of movies) {
    if(movie.durationInMinutes < 100) {
        smallMovies.push(movie);
    } else if(movie.durationInMinutes < 200) {
        mediumMovies.push(movie);
} else {
    bigMovies.pusg(movie);
}
}
console.log("peques");
console.log(smallMovies);
console.log("medianas");
console.log(mediumMovies);
console.log("grandes");
console.log(bigMovies);

