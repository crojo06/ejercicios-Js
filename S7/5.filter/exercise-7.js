const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

let input$ = document.querySelector('[data-function="toFilterStreamers"]');
input$.addEventListener('input', printStreamers);

function printStreamers() {
    let value =this.value;
    let filteredStreamers = streamers.filter(streamer => streamer.name.includes(value));
    console.log(filteredStreamers);

}