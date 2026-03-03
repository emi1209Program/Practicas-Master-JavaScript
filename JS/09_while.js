/**
 * Archivo: 09_while.js
 *
 * Descripción (ES):
 * Este archivo demuestra el uso de los bucles while y do...while
 * en JavaScript. Se explica cómo funcionan las iteraciones basadas
 * en condiciones y la diferencia principal entre ambos.
 *
 * Description (EN):
 * This file demonstrates the use of while and do...while loops
 * in JavaScript. It explains how condition-based iterations work
 * and the main difference between both structures.
 */

'use strict';

// Verifica que el archivo esté cargado correctamente
// Confirms that the file is loaded correctly
alert("Este archivo cargó de la manera correcta (09_while)");

// Variable inicial
// Initial variable
var year = 2026;

/*
Bucle while:
Ejecuta el bloque de código mientras la condición sea verdadera.

While loop:
Executes the code block as long as the condition is true.
*/

while (year <= 2051) {

	console.log("Estamos en el año: " + year);

	// Ejemplo de uso de break para salir del bucle
	// Example of using break to exit the loop
	if (year == 2000) {
		break;
	}

	// Incremento manual del contador
	// Manual increment of the counter
	year++;
}


/*
Bucle do...while:
Primero ejecuta el bloque de código y después evalúa la condición.
Se ejecuta al menos una vez.

Do...while loop:
Executes the code block first and then evaluates the condition.
It runs at least once.
*/

// Nueva variable para el ejemplo
// New variable for the example
var year = 30;

do {

	alert("Solo cuando sea diferente a 20");

	year++;

} while (year > 22);