
// Exercise 1: Get the array of all directors.
// només els directors de les pel·lícules. 

// 1- Utilizar el método map para extraer datos director únicamente 
// 2- Devolver el array nuevo creado

function getAllDirectors(movies) {

//método map para conseguir el nombre de los directores  
let arrayDirectors = movies.map(nombre => nombre.director);
return arrayDirectors;

}
  
// Exercise 2: Get the films of a certain director
// mostrar les pel·lícules per a un determinat director/a.
// rebre com a paràmetre el/la director/a per al qual es volen buscar les seves pel·lícules, i retorna l'array de pel·lícules que ha dirigit.
// utilizar método filter

// 1- Crear un array con filter de director == director 
// 2- Devolver ese array.

function getMoviesFromDirector(movies, director) {

//hacemos un filter para que nos muestren la peliculas de un determinado director Ejemplo "Mel Gibson"
let pDire = movies.filter(busquedaPeli =>busquedaPeli.director == director);
return pDire; 

}

// Exercise 3: Calculate the average of the films of a given director.
// calcular la mitjana de les puntuacions de les seves pel·lícules.
// rep un array de pel·lícules i retorna la nota mitjana, amb dos decimals.
// utilizar método reduce

// 1- Crear un filter para buscar por director
// 2- Después utilizar método reduce de las puntuaciones partiendo de índice 0
// 3- De esas puntuaciones dividir el número de elementos del objeto
// 4- Devolver un array de pelis i devolver la nota media con 2 decimales

function moviesAverageOfDirector(movies, director){

  // filtramos por peli director
  let pDire2 = movies.filter(busquedaPeli_2 =>busquedaPeli_2.director === director); 
   //la reducción de elementos de la puntuación se divide por el número de elementos del objeto 
  let sumaPuntuaciones = pDire2.reduce((contador, item) => contador + item.score, 0); 
  // Se divide esa suma de puntuaciones entre 
  let promedioFinal =  Number(sumaPuntuaciones / pDire2.length);
  let u = promedioFinal.toFixed(2);

  return parseFloat(u);

 
}
         
// Exercise 4:  Alphabetic order by title 
// hauràs de crear una funció, que rebent un array de pel·lícules, el retorni ordenat alfabèticament per títol.
// retornar les 20 primeres pel·lícules ordenades.

// 1- Se utilizar map (para recorrer los títulos de películas y el método sort que ordena)
// 2- Se devuelve con return las primeras 20 con lenght > 20 y con slice extraemos del índice 0 a la 20. 

function orderAlphabetically(movies) {
  
  //Hacemos un recorrido con map y ordenamos las películas por títulos 
  let titulosPeliculas = movies.map(pelicula => pelicula.title).sort();
  // devolvemos solo las 20 primeras (recorremos 20) y cogemos desde inicio (0 hasta la 20 que elegimos como última)
  return titulosPeliculas.length > 20 ? titulosPeliculas.slice(0, 20) : titulosPeliculas;
}

// Exercise 5: Order by year, ascending
// rebent un array de pel·lícules, retorna un array de pel·lícules ordenades per any.
// Per a ordenar aquestes pel·lícules que tenen el mateix any, s'ha de fer per ordre alfabètic del títol

// 1-Hacer array map de peliculas y que devuelva este array pero ordenadas por año.
// 2-Utilizar sort y comparar título - año y por orden alfabético. Se tiene que hacer por orden alfabético del título de la peli

function orderByYear(array) {

  let titulosPeliculas = [...array];
  //hacemos la comparación de los elementos a, b
  titulosPeliculas = titulosPeliculas.sort((a, b) => {
    //si a(año) es mayor que b devolvemos 1
    if(a.year > b.year) {
      return 1;
    }
    //si a(año) es menor que b devolvemos -1
    if(a.year < b.year) {
      return -1;
    }
    //si a(título) es mayor que b devolvemos 1
    if(a.title > b.title){
      return 1;
    }
    //si a(título) es menor que b devolvemos -1
    if(a.title < b.title){
      return -1;
    }
    return 0;
  });
  return titulosPeliculas;

 }

// Exercise 6: Calculate the average of the movies in a category
// demanar la nota mitjana de les pel·lícules d'un determinat gènere.
// rebi una categoria de pel·lícula,  i calculi la mitjana de nota d'aquesta categoria (sobre l'array de totes les pel·lícules).
// Primer has d'obtenir les pel·lícules d'una determinada categoria, i després cridar a moviesAverage(), per a calcular la seva mitjana.

// 1- Llamar a la función moviesAverage
// 2- Recibir una categoria de película
// 3- Calcular la media de la nota de esta categoría (sobre el array de todas las películas)

function moviesAverageByCategory(movies, category) {

  let categoriaDrama;
  // filtramos por genero y elegimos una categoria 
  categoriaDrama = movies.filter(categoriaPeli => categoriaPeli.genre.includes(category)); 
  //let categoriaDrama = movies.filter(categoryPeli => categoryPeli.genre == "Drama");
  console.log("Categoria" , categoriaDrama);

  // filtramos si está vacía la categoría
  categoriaDrama = categoriaDrama.filter(categoriaPeli2 => categoriaPeli2.score !==''); 
  console.log("si está vacía -->" , categoriaDrama)

  // con método reduce conseguimos puntuación
  let puntuaPelis = categoriaDrama.reduce((a, b) => a + b.score, 0);
  console.log("puntuación total" ,puntuaPelis);
 // se divide la suma

  let mediaPuntPeliCat = Number(puntuaPelis / categoriaDrama.length);
          
  //let mediaPuntPeliCat2 = Number(mediaPuntPeliCat / moviesAverageOfDirector.length);
  console.log("división puntuación -->" , mediaPuntPeliCat);
    
  let x = mediaPuntPeliCat.toFixed(2);
  //let x = mediaPuntPeliCat.toFixed(2);
  console.log("media final -->" , mediaPuntPeliCat)     
 
 //return mediaPuntPeliCat;
   return parseFloat(x);

 
// NO DEBE TOMAR CONSIDERACIÓN PELICULAS DE OTRA CATEGORIA
// debería devolver el promedio incluso si una de las películas no tiene puntaje

}

// Exercise 7: Modify the duration of movies to minutes
// rebent un array de pel·lícules, retorna un array amb aquestes pel·lícules però amb la durada en minuts!

// 1- Mirar duración películas en horas minutos
// 2- Devolver esas horas minutos
// 3- Convertir con parseFloat las horas en minutos 
// 5- Multiplicar cada hora por 60 (minutos)
// 6- Devolver la conversión

function hoursToMinutes(movies) {

  //devolver duración y con Object. assign copia las propiedades objeto fuente y las devuelve a objeto destino
  return movies.map(duracionPeli =>{
    let horasMinutos = Object.assign({}, duracionPeli);
    let [horas, minutos] = horasMinutos.duration.split(' ');
    horasMinutos.duration = (parseFloat(horas ? horas : 0 ) * 60) + parseFloat(minutos ?  minutos : 0);
    return horasMinutos;
    //let minutos = Number.parseInt(horasMinutos) * 60;
  });

    //console.log("horas minutos array pelis-->", horasMinutos);
     

}

// Exercise 8: Get the best film of a year
// Els usuaris/àries necessiten saber quina pel·lícula és la millor de cada any. 
// Per dur a terme aquesta funcionalitat, hauràs de crear una funció que accepti l'any, i retorni la millor pel·lícula d'aquest any.

// 1- Mirar les scores / puntuaciones de las pelis, 
// 2- Recorrer todos los años de las peliculas y filtrarlas por año / título
// 3- Devolver la mejor película de ese año 

function bestFilmOfYear(movies, year) {
  
  // buscamos con filter la pelicula del año
  let mejorFilm = movies.filter(busquedaAno => busquedaAno.year == year);
  // devolvemos con el método sort ordenando y con slice extrayendo el elemento 
  console.log (mejorFilm);
  return mejorFilm.sort((a, b) => b.score - a.score).slice(0, 1);
  //return mejorFilm = movies.reduce((a, b) => a.score > b.score ? a : a.score < b.score ? b : b);
 
  //return mejorFilm;

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
