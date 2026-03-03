/**
 * Archivo: 13_ejercicio3.js
 *
 * Descripción (ES):
 * Este programa solicita dos números al usuario y muestra
 * todos los números comprendidos entre ellos utilizando un ciclo.
 * Los resultados se imprimen directamente en el documento HTML
 * mediante el uso de document.write().
 *
 * Description (EN):
 * This program asks the user for two numbers and displays
 * all the numbers between them using a loop.
 * The results are printed directly into the HTML document
 * using document.write().
 */

'use strict';

// Verifica que el archivo esté cargado correctamente
// Confirms that the file is loaded correctly
alert("Este archivo se cargó de la manera correcta (13_ejercicio3)");

/*>
 CAPTURA DE DATOS / DATA INPUT
*/

// Solicita el primer número y lo convierte a entero
// Requests the first number and converts it to integer
var numero1 = parseInt(prompt("Introduce el primer número", 0));

// Solicita el segundo número y lo convierte a entero
// Requests the second number and converts it to integer
var numero2 = parseInt(prompt("Introduce el segundo número", 0));

/*
   SALIDA EN DOCUMENTO HTML
   OUTPUT IN HTML DOCUMENT
*/

/*
document.write() permite escribir contenido directamente
en el documento HTML. Puede incluir etiquetas como <h1>, <br>, etc.

document.write() allows writing content directly
into the HTML document. It can include tags such as <h1>, <br>, etc.
*/

// Título dinámico mostrando el rango seleccionado
// Dynamic title showing the selected range
document.write("<h1>De " + numero1 + " a " + numero2 + " están estos números</h1>");

/* 
 BUCLE DE IMPRESIÓN / PRINT LOOP
*/

/*
Se utiliza un ciclo for porque conocemos el punto inicial
y el punto final del recorrido.

A for loop is used because we know the starting
and ending point of the iteration.
*/

for (var i = numero1; i <= numero2; i++) {

    // Imprime cada número del rango en una nueva línea
    // Prints each number in the range on a new line
    document.write(i + "<br/>");

}