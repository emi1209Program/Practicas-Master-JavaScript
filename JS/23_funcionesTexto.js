'use strict'

// Mensaje que confirma que el archivo JS se cargó correctamente
alert("Este archivo se cargo de la manera correcta (23_funcionesTexto)");

/*
MÉTODOS Y TRANSFORMACIÓN DE TEXTOS EN JS
*/

var numero = 444;
var texto1 = "Bienvenido a las practicas de JS por Emiliano Reséndiz";
var texto2 = "Son muy buenas practicas";

/*
MÉTODOS DE BÚSQUEDA
*/

// Devuelve la posición donde comienza la palabra indicada
var busqueda = texto1.indexOf("practicas");

// Devuelve la última posición donde aparece el carácter indicado
var busqueda2 = texto1.lastIndexOf("o");

// Similar a indexOf, busca la posición de una palabra
var busqueda3 = texto1.search("Emiliano");

// Devuelve un array con la coincidencia encontrada
var busqueda4 = texto1.match("practicas");

// Devuelve un array con TODAS las coincidencias (expresión regular con bandera g)
var busqueda5 = texto1.match(/practicas/g);

// Extrae parte del texto desde una posición específica (inicio, longitud)
var busqueda6 = texto1.substr(14,5);

// Devuelve el carácter en la posición indicada
var busqueda7 = texto1.charAt(44);

// Devuelve true si el texto comienza con la palabra indicada
var busqueda8 = texto1.startsWith("B");

// Devuelve true si el texto termina con la palabra indicada
var busqueda9 = texto1.endsWith("z");

// Devuelve true si el texto contiene exactamente la palabra indicada
var busqueda10 = texto1.includes("JS");

/*
MÉTODOS DE MODIFICACIÓN
*/

// Reemplaza una parte del texto por otra
var busqueda11 = texto1.replace("JS", "JavaScript");

// Corta el texto desde la posición indicada hasta el final
var busqueda12 = texto1.slice(12);

// Divide el texto en un array usando el separador indicado
var busqueda13 = texto1.split(" ");

// Elimina espacios en blanco al inicio y al final
var busqueda14 = texto1.trim();

/*
IMPRESIÓN DE RESULTADOS
*/

console.log(busqueda);
console.log(busqueda2);
console.log(busqueda3);
console.log(busqueda4);
console.log(busqueda5);
console.log(busqueda6);
console.log(busqueda7);
console.log(busqueda8);
console.log(busqueda9);
console.log(busqueda10);
console.log(busqueda11);
console.log(busqueda12);
console.log(busqueda13);
console.log(busqueda14);


/*
PRUEBAS ADICIONALES (comentadas)

// Convertir número a texto
var dato = numero.toString();

// Convertir texto a mayúsculas
dato = texto1.toUpperCase();
dato = texto2.toUpperCase();

console.log(dato);

// Obtener la longitud de un texto
var nombre = "Emiliano Reséndiz";
console.log(nombre.length);

// Concatenar textos
// var textoTotal = texto1 + " " + texto2;
var textoTotal = texto1.concat(" " + texto2);
console.log(textoTotal);

*/