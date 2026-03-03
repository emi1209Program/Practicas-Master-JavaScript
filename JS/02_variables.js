/**
 * Archivo: 02_variables.js
 *
 * Descripción (ES):
 * Este archivo explica el concepto de variables en JavaScript.
 * Se muestran ejemplos de variables tipo texto y número,
 * reasignación de valores, concatenación y uso de modo estricto.
 *
 * Description (EN):
 * This file explains the concept of variables in JavaScript.
 * It includes examples of string and number variables,
 * value reassignment, concatenation, and strict mode usage.
 */

/*
Una variable es como una caja.
Es un contenedor que almacena información o datos,
como texto (string), números enteros o decimales.

A variable is like a box.
It is a container used to store information or data,
such as text (string) or numbers.
*/

// Activa el modo estricto para aplicar reglas más seguras en JavaScript
// Enables strict mode to enforce safer JavaScript rules
'use strict';

// Variables tipo texto
// String variables

var pais = "México";
var continente = "America";

// Variable tipo número
// Number variable

var antiguedad = 2025;

// Variable declarada con let (alcance de bloque)
// Variable declared using let (block scope)
let prueba = "Hola";

// Muestra un mensaje emergente en el navegador
// Displays a popup message in the browser
alert("Hola");

// Reasignación de valores
// Value reassignment

// Se sobreescriben los valores originales
// Original values are overwritten
pais = "España";
continente = "Europa";

// Concatenar
var pais_y_continente = pais + ' ' + continente;

// Salida en consola y alert
// Console and alert output

// Imprime múltiples valores en consola
// Prints multiple values to the console
console.log(pais, continente, antiguedad);

// Muestra el resultado concatenado en una alerta
// Displays the concatenated result in an alert
alert(pais_y_continente);