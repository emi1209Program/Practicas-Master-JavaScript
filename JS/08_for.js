/**
 * Archivo: 08_for.js
 *
 * Descripción (ES):
 * Este archivo demuestra el uso del bucle for en JavaScript.
 * El bucle permite ejecutar un bloque de código múltiples veces
 * mientras se cumpla una condición específica.
 *
 * Description (EN):
 * This file demonstrates the use of the for loop in JavaScript.
 * The loop allows executing a block of code multiple times
 * while a specific condition is met.
 */

'use strict';

// Verifica que el archivo esté cargado correctamente
// Confirms that the file is loaded correctly
alert("Este archivo cargó de la manera correcta (08_for)");

/*
Bucle for:
Se utiliza cuando conocemos la cantidad de iteraciones
que deseamos ejecutar.

For loop:
Used when we know the number of iterations
we want to execute.
*/

// Número límite para la iteración
// Limit number for the iteration
var numero = 100;

/*
Estructura del for:
for (inicialización; condición; incremento)

For structure:
for (initialization; condition; increment)
*/

for (var i = 0; i <= numero; i++) {

	// Imprime el valor actual del contador
	// Prints the current counter value
	console.log("Vamos por el número: " + i);

	/*
	debugger:
	Detiene la ejecución si las herramientas de desarrollador
	están abiertas, permitiendo inspeccionar el estado del código.

	debugger:
	Pauses execution if developer tools are open,
	allowing inspection of the code state.
	*/
	debugger;
}