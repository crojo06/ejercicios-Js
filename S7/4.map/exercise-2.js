const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];

let names = users.map(function(user) {
    if(user.name.charAt(0) === "A") {
        return "Anacleto";
    } else {
        return user.name;
    }
});
console.log(names);