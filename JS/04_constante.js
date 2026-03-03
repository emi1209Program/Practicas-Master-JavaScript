/**
 * Archivo: 04_constante.js
 *
 * Descripción (ES):
 * Este archivo explica el uso de constantes en JavaScript utilizando
 * la palabra reservada "const". Se muestra la diferencia entre una
 * variable declarada con "var" (que permite reasignación) y una
 * constante declarada con "const" (que no puede cambiar su valor).
 *
 * Description (EN):
 * This file explains the use of constants in JavaScript using
 * the reserved keyword "const". It demonstrates the difference
 * between a variable declared with "var" (which allows reassignment)
 * and a constant declared with "const" (which cannot change its value).
 */

'use strict';

// Verifica que el archivo esté cargado correctamente
// Confirms that the file is loaded correctly
alert("Este archivo está cargado de manera correcta (04_constante)");

/*
Una constante es similar a una variable,
pero su valor no puede modificarse después de su declaración.

A constant is similar to a variable,
but its value cannot be modified after its declaration.
*/

// Variable que puede cambiar su valor
// Variable that can change its value
var web = "https://google.com";

// Constante cuyo valor es fijo
// Constant whose value is fixed
const ip = "192.000.000.001";

// Reasignación válida porque fue declarada con var
// Valid reassignment because it was declared with var
web = "Dale Click a mi perfil de linkedin " +
      "www.linkedin.com/in/emiliano-reséndiz-sánchez-1765061a1";

/*
Si intentáramos hacer lo siguiente:

ip = "2222222";

Se generaría un error en la consola, ya que "ip" fue declarada
como constante y no permite reasignación.

If we attempted the following:

ip = "2222222";

An error would be thrown in the console because "ip"
was declared as a constant and does not allow reassignment.
*/

// Muestra los valores actuales en la consola
// Displays the current values in the console
console.log(web, ip);