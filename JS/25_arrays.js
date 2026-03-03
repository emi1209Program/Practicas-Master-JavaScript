'use strict'

// Mensaje que confirma que el archivo JS se cargó correctamente
alert("Este archivo se cargo de la manera correcta (25_arrays)");

/*
ARRAYS / ARREGLOS / MATRICES

Un array es una colección de datos almacenados en una sola variable.
Cada valor dentro del array tiene una posición llamada índice.

IMPORTANTE:
Los índices comienzan desde 0.
*/

// Array con distintos tipos de datos (string, number, boolean)
var nombres = ["Emiliano Reséndiz", "Sofía Pérez", "Juanito", 12, 9, true];

// Otra forma de crear un array usando el constructor
var lenguajes = new Array("PHP", "JS", "GO", "Java", "CSS", "C#");

/*
RECORRER ARRAYS
*/

// Se abre una lista HTML
document.write("<ul>");

/*
for...in:
Recorre los índices del array.
En cada iteración, "lenguaje" representa el índice,
por eso se accede con lenguajes[lenguaje]
*/
for(let lenguaje in lenguajes){
	document.write("<li>"+lenguajes[lenguaje]+"</li>");
}

// Se cierra la lista HTML
document.write("</ul>");

/*
BÚSQUEDAS EN ARRAYS
*/

// Array de números
var precios = [10, 20, 50, 80];

/*
find():
Devuelve el primer elemento que cumpla la condición.
En este caso busca el lenguaje "PHP".
*/
var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");

/*
some():
Devuelve true si al menos un elemento cumple la condición.
Aquí verifica si existe un precio mayor o igual a 20.
*/
var busquedaArray = precios.some(precios => precios >= 20);

// Mostrar resultados en consola
console.log(busqueda);
console.log(busquedaArray);

/*
CÓDIGO DE EJEMPLO (comentado)

for(var i = 0; i < lenguajes.length; i++){
	document.write("<li>"+lenguajes[i]+"</li>");
}
document.write("/<ul>");

*/