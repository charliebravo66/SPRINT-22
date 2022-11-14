const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  
//mapear el array con una función arrow que busque por director  

              let busquedaDirector = [movies];

              let nuevoArr = busquedaDirector.map(movies.director);

//fin
//version Daniel Guido
//let arrayDirectors = array.map(nombre => nombre.director);
console.log("hola", nuevoArr);
//console.log("EXERCICE 1 ->", nuevoArr);
return nuevoArr;

//
/*let array1 = movies.length;
console.log(array1);

return movies.map(movie=>movie.director);*/


//let busquedaDirector =  movies.map(busquedaDirector => busquedaDirector.director);

//const nuevoArray = busquedaDirector(movies.director);

/*  let busquedaDirector = function(dire) {
            return dire.director;
          }
          
  let result = movies(director).map(busquedaDirector);
          console.log(result);*/

 

  
 

  //return result;
  //return busquedaDirector;
  }
  


// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {

  /*const items = array.filter(item => {
    if(item.title === 'Pulp Fiction'){
      return true;
    }else{
      return false;
    }
  })*/


      let buscaPeli = array.filter(dire => dire.title = "Frank Darabont");  
//let buscaPeli = array.filter((peli.indice) = indice == 0);
//let buscaDire = director.filter((peli.indice) = indice == 1);
      console.log(buscaPeli);
//return conseguirPeli;
//let pelisDirector = array.filter(busquedaDirector =>busquedaDirector.director == director); 
//let peliDire = array.filter(film => film.director);
//let pDire = array.filter((busqueda) =>busqueda.title);
//console.log("EXERCICE 2 ->", pDire);
//return peDire;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  


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
