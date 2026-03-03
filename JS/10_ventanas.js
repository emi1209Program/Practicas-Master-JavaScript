/**
 * Archivo: 10_ventanas.js
 *
 * Descripción (ES):
 * Este archivo demuestra el uso de ventanas del navegador
 * para interactuar con el usuario mediante alert(), confirm()
 * y prompt(). Estas funciones pertenecen al BOM (Browser Object Model).
 *
 * Description (EN):
 * This file demonstrates the use of browser dialog windows
 * to interact with the user using alert(), confirm(),
 * and prompt(). These functions belong to the BOM (Browser Object Model).
 */

'use strict';

// Verifica que el archivo esté cargado correctamente
// Confirms that the file is loaded correctly
alert("Se cargó de manera correcta el archivo (10_ventanas)");

/*
alert():
Muestra una ventana emergente con un mensaje informativo.

alert():
Displays a popup window with an informational message.
*/

/*
confirm():
Muestra una ventana de confirmación con opciones Aceptar/Cancelar.
Retorna true si el usuario acepta y false si cancela.

confirm():
Displays a confirmation dialog with OK/Cancel options.
Returns true if the user accepts and false if the user cancels.
*/

// var miResultado = confirm("¿Estás seguro de querer continuar?");
// console.log(miResultado);

/*
prompt():
Muestra una ventana que permite al usuario ingresar datos.
El valor ingresado siempre se devuelve como string.

prompt():
Displays a dialog that allows the user to input data.
The returned value is always a string.
*/

// Ingreso de datos con valor por defecto
// Data input with default value
var miResultado = prompt("¿Qué edad tienes?", 10);

// Verifica el tipo de dato retornado
// Checks the returned data type
console.log(typeof miResultado);