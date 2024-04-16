const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]
let categories = [];
for(let movie of movies) {
    for(let movieCategory of movie.categories) {
        if(!categories.includes(movieCategory)) {
            categories.push(movieCategory);
       }
    }
}
console.log(categories);