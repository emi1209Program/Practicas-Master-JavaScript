'use strict'

// Mensaje que confirma que el archivo JS se cargó correctamente
alert("Este archivo se cargo de la manera correcta (26_arraysMulti)");

/*
ARRAYS MULTIDIMENSIONALES Y MÉTODOS
*/

// Array de categorías
var categoria = ['Accion', 'Terror', 'Comedia'];

// Array de películas
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran torino'];

/*
sort():
Ordena el array alfabéticamente (modifica el array original)
*/
peliculas.sort();

/*
reverse():
Invierte el orden actual del array
(también modifica el array original)
*/
var peliculasOrdenAl = peliculas.reverse();

// Se muestran ambos resultados
console.log(peliculas);
console.log(peliculasOrdenAl);

/*
Array multidimensional:
Se crea un array que contiene otros arrays
*/
var cine = [categoria, peliculas];

/*
indexOf():
Devuelve la posición del elemento buscado.
Si no lo encuentra devuelve -1.
*/
var indice = peliculas.indexOf('Gran torino');

/*
splice():
Permite eliminar elementos del array.
- Primer parámetro: posición
- Segundo parámetro: cantidad de elementos a eliminar
*/
if(indice > -1){
	peliculas.splice(indice, 1);
}

/*
join():
Convierte el array en un string
(separa los elementos por coma por defecto)
*/
var peliculasTexto = peliculas.join();

/*
split():
Convierte un string en array usando un separador
*/
var cadena = "texto1, texto2, texto3";
var cadenaArray = cadena.split(", ");

console.log(cadenaArray);

/*
EJEMPLOS ADICIONALES (comentados)
// Acceso a arrays multidimensionales
// console.log(cine[0][3]);
// console.log(cine[1][2]);

// Agregar elementos dinámicamente con push()
var elemento = "";

do{
	elemento = prompt("Introduce tu pelicula");
	peliculas.push(elemento);
}while(elemento != "Acabar");

// pop():
// Elimina el último elemento del array
peliculas.pop();

*/