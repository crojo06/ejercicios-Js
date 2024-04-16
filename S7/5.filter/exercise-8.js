const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

let button$ = document.querySelector('[data-function="toShowFilterStreamers"]');
button$.addEventListener('click', printStreamers);

let input$ = document.querySelector('[data-function="toFilterStreamers"]');
    input$.addEventListener('input', printStreamers);

   function printStreamers() {
    let input$ = document.querySelector('[data-function="toFilterStreamers"]');
    let value = input$.value;
    let filteredStreamers = streamers.filter(streamer => streamer.name.toLowerCase().includes(value));
    console.log(filteredStreamers);
   }
    
//
const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

let button$ = document.querySelector('[data-function="toShowFilterStreamers"]');
button$.addEventListener('click', printStreamers);

let input$ = document.querySelector('[data-function="toFilterStreamers"]');
    input$.addEventListener('input', printStreamers);

   function printStreamers() {
    let input$ = document.querySelector('[data-function="toFilterStreamers"]');
    let value = input$.value;
    let filteredStreamers = streamers.filter(streamer => streamer.includes(value));
    console.log(filteredStreamers);
   }

   //asi lo hizo profesor