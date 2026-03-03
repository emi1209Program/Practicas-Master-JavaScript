/**
 * Archivo: 06_if.js
 *
 * Descripción (ES):
 * Este archivo demuestra el uso de estructuras condicionales en JavaScript,
 * incluyendo if, else if y else. También se explican los operadores
 * relacionales y lógicos utilizados para evaluar condiciones.
 *
 * Description (EN):
 * This file demonstrates the use of conditional structures in JavaScript,
 * including if, else if, and else statements. It also explains relational
 * and logical operators used to evaluate conditions.
 */

'use strict';

// Verifica que el archivo esté cargado correctamente
// Confirms that the file is loaded correctly
alert("Este archivo se cargó de manera correcta (06_if)");

// Variables a evaluar
// Variables to evaluate
var edad = 22;
var nombre = "Emiliano Reséndiz";

/*
Estructura if:
Permite ejecutar un bloque de código si una condición es verdadera.

If statement:
Executes a block of code if a condition evaluates to true.
*/

if (edad >= 18) {

	console.log(nombre + " tiene " + edad + " años, es mayor de edad");

	// Condicional anidado
	// Nested conditional
	if (edad <= 31) {
		console.log("Ya eres un abuelo");
	} else if (edad >= 70) {
		console.log("Eres un dinosaurio");
	} else {
		console.log("Aún no eres un abuelo");
	}

} else {

	console.log(nombre + " tiene " + edad + " años, es menor de edad");
}

/*
Operadores relacionales:
>   Mayor que (Greater than)
<   Menor que (Less than)
>=  Mayor o igual que (Greater than or equal)
<=  Menor o igual que (Less than or equal)
==  Igual que (Equal to)
!=  Diferente de (Not equal)
*/

/*
Operadores lógicos:
&&  AND (y)
||  OR (o)
!   Negación (NOT)
*/

var year = 2026;

// Ejemplo de negación
// Negation example
if (year != 2016) {
	console.log("El año no es 2016, realmente es: " + year);
}

// Ejemplo usando AND
// Example using AND
if (year >= 2000 && year <= 2020 && year != 2018) {
	console.log("Estamos en la era actual");
} else {
	console.log("Estamos en la era post-moderna");
}

// Ejemplo usando OR
// Example using OR
if (year == 2008 || (year >= 2018 && year == 2028)) {
	console.log("El año acaba en 8");
} else {
	console.log("Año no registrado");
}