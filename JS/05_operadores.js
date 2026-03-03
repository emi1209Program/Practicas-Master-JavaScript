/**
 * Archivo: 05_operadores.js
 *
 * Descripción (ES):
 * Este archivo demuestra el uso de operadores aritméticos en JavaScript,
 * así como la conversión de tipos de datos utilizando funciones como
 * Number(), String() y el operador typeof.
 *
 * Description (EN):
 * This file demonstrates the use of arithmetic operators in JavaScript,
 * as well as data type conversion using functions such as
 * Number(), String(), and the typeof operator.
 */

'use strict';

// Verifica que el archivo esté cargado correctamente
// Confirms that the file is loaded correctly
alert("Este archivo se cargó de manera correcta (05_operadores)");

// Declaración de variables numéricas
// Numeric variable declaration
var numero1 = 7;
var numero2 = 12;

// Operación matemática (multiplicación)
// Mathematical operation (multiplication)
var operacion = numero1 * numero2;

// Muestra el resultado en consola
// Displays the result in the console
console.log("El resultado de la operación es: " + operacion);

// Diferentes tipos de datos
// Different data types
var numero_entero = 44;
var cadena_texto = "Hola";
var booleano = true;

// Variable tipo string que contiene un número
// String variable containing a numeric value
var numeroFalso = "33";

/*
Number():
Convierte un valor tipo string a número.
Puede convertir tanto a entero como a decimal (float).

Number():
Converts a string value into a number.
It can convert to either integer or float.
*/
console.log(Number(numeroFalso) + 7);

/*
String():
Convierte un número (int o float) a texto.
Al concatenarlo con otro valor, se comporta como cadena.

String():
Converts a number (int or float) into text.
When concatenated, it behaves as a string.
*/
console.log(String(numero_entero) + 7);

// typeof:
/// Permite identificar el tipo de dato de una variable
// Allows identifying the data type of a variable
console.log(typeof numero_entero);