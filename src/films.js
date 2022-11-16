
// Exercise 1: Get the array of all directors.
// només els directors de les pel·lícules. 
// 1- Utilizar el método map para extraer datos director únicamente 
// 2- Devolver el array nuevo creado

function getAllDirectors(array) {

let arrayDirectors = array.map(nombre => nombre.director);
return arrayDirectors;

}
  
// Exercise 2: Get the films of a certain director
// mostrar les pel·lícules per a un determinat director/a.
// rebre com a paràmetre el/la director/a per al qual es volen buscar les seves pel·lícules, i retorna l'array de pel·lícules que ha dirigit.
// utilizar método filter
// 1- Crear un array con filter de director == director 
// 2- Devolver ese array.

function getMoviesFromDirector(array, director) {

let pDire = array.filter(busquedaPeli =>busquedaPeli.director == director);
return pDire; 

}

// Exercise 3: Calculate the average of the films of a given director.
// calcular la mitjana de les puntuacions de les seves pel·lícules.
// rep un array de pel·lícules i retorna la nota mitjana, amb dos decimals.
// utilizar método reduce
//1- Crear un filter para buscar por director
//2- Después utilizar método reduce de las puntuaciones partiendo de índice 0
//3- De esas puntuaciones dividir el número de elementos del objeto
//4- Devolver un array de pelis i devolver la nota media con 2 decimales



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
// hauràs de crear una funció, que rebent un array de pel·lícules, el retorni ordenat alfabèticament per títol.
// retornar les 20 primeres pel·lícules ordenades.
//1- Se utilizar map (para recorrer los títulos de películas y el método sort que ordena)
//2- Se devuelve con return las primeras 20 con lenght > 20 y con slice extraemos del índice 0 a la 20. 

function orderAlphabetically(array) {
  let titulosPeliculas = array.map(pelicula => pelicula.title).sort();
  return titulosPeliculas.length > 20 ? titulosPeliculas.slice(0, 20) : titulosPeliculas;
}

// Exercise 5: Order by year, ascending
// rebent un array de pel·lícules, retorna un array de pel·lícules ordenades per any.
//Per a ordenar aquestes pel·lícules que tenen el mateix any, s'ha de fer per ordre alfabètic del títol
//1-Hacer array map de peliculas y que devuelva este array pero ordenadas por año.
//2-Utilizar sort y comparar título - año y por orden alfabético. Se tiene que hacer por orden alfabético del título de la peli

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
//demanar la nota mitjana de les pel·lícules d'un determinat gènere.
//rebi una categoria de pel·lícula,  i calculi la mitjana de nota d'aquesta categoria (sobre l'array de totes les pel·lícules).
//Primer has d'obtenir les pel·lícules d'una determinada categoria, i després cridar a moviesAverage(), per a calcular la seva mitjana.
//1- Llamar a la función moviesAverage
//2- Recibir una categoria de película
//3- Calcular la media de la nota de esta categoría (sobre el array de todas las películas)

function moviesAverageByCategory() {

  
  //let puntuaPeliculas = array.filter(scorePeli =>scorePeli.score == score);

}

// Exercise 7: Modify the duration of movies to minutes
// rebent un array de pel·lícules, retorna un array amb aquestes pel·lícules però amb la durada en minuts!
// 1- Mirar duración películas en horas minutos
// 2- Devolver esas horas minutos
// 3- Convertir con parseFloat las horas en minutos 
// 5- Multiplicar cada hora por 60 (minutos)
// 6- Devolver la conversión

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
//Els usuaris/àries necessiten saber quina pel·lícula és la millor de cada any. 
//Per dur a terme aquesta funcionalitat, hauràs de crear una funció que accepti l'any, i retorni la millor pel·lícula d'aquest any.
/*1- Mirar les scores / puntuaciones de las pelis, 
2- Recorrer todos los años de las peliculas y filtrarlas por año / título
3- Devolver la mejor película de ese año */

function bestFilmOfYear(movies) {
  
  let anoFilm = year.filter (busquedaAno => busquedaAno.peliOne == peliOne.title);
  return anoFilm;
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
