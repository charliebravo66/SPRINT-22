
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
  
let calculaPuntuacion = array.reduce(puntuaScore => puntuaScore.score == director);
//const calculaPuntuacion = array.reduce(
//  (previousValue, currentValue) => previousValue + currentValue (score, director)
//);
/*let calculaPuntuacion =score.reduce(
  function (valorAnterior, valorActual) {
    return Object.assign(valorAnterior, { [valorActual.id]: valorActual });
  },
  {} /* el valor inicial es un objeto vacío */

  //return p + e;
//let puntuaPeli = newArray.director == calculaPuntuacion;
return calculaPuntuacion;

    
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

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
