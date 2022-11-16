
// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {

let arrayDirectors = array.map(nombre => nombre.director);
return arrayDirectors;

}
  
// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {

let pDire = array.filter(busquedaPeli =>busquedaPeli.director == director);
return pDire; 

}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {

//let resultado busqueda director película  
let result = array.filter(busquedaPeli =>busquedaPeli.director == director);
//let calculaPuntuacion = result.map(puntuaScore => puntuaScore.score);
const sumaPuntuaciones = array.reduce((contador, item) => contador + item.score, 0);

//la reducción de elementos se divide por el número de elementos del objeto 
let promedioPuntuacion = sumaPuntuaciones / array.length;

console.log(promedioPuntuacion.toFixed(2));

//se aplica en el promedio los 2 decimales
return promedioPuntuacion;

    
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let titulosPeliculas = array.map(pelicula => pelicula.title).sort();
  return titulosPeliculas.length > 20 ? titulosPeliculas.slice(0, 20) : titulosPeliculas;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {

  let titulosPeliculas2 = array.map(pelicula2 => pelicula2.title);
 
  let anoPeliculas = array.map(anoPelicula => anoPelicula.year);

   
  //array de pelis, devuelve un array de pelis ordenadas por año
 // return titulosPeliculas2.sort((a,b)=> {return a.title - b.year});

 return titulosPeliculas2 = array.sort((r1, r2) => (r1.year > r2.year) ? 1 : (r1.year < r2.year) ? -1 : 0);
 //ordenar pelis que tienen el mismo año, orden alfabetico del título
 return ordernarPelis = array.sort((s1, s2) => (s1.title == s2.year) ? 1 : (s1.title == s2.year) ? -1 : 0); 

  //let filtrajeAlfabetico = titulosPeliculas2.filter(alfaPeli =>alfaPeli.title == title);

  //return filtrajeAlfabetico;




}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

  
  //let puntuaPeliculas = array.filter(scorePeli =>scorePeli.score == score);

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {

   //let horasMinutos = array.map(duracionPeli =>duracionPeli.duration);
   let horasMinutos = movies.map(duracionPeli =>duracionPeli.duration);
   return t = horasMinutos;  
   let hora = movies.parseFloat(horasMinutos);

   let convertir = hora * 60;


  return convertir;
//console.log(convertir);
  // hora a convertir
//return t = horasMinutos;

// creamos una fecha genérica con tu tiempo
//let d = new Date(tiempo + t);

// calculamos los minutos a partir de las horas y minutos de la fecha creada
//let minutos = d.getHours() * 60 + d.getMinutes();

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
