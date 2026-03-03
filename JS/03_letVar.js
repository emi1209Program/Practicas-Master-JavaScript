/**
 * Archivo: 03_letVar.js
 *
 * Descripción (ES):
 * Este archivo demuestra la diferencia entre "var" y "let"
 * en cuanto al alcance (scope) de las variables.
 * Se analiza cómo var tiene alcance global o de función,
 * mientras que let tiene alcance a nivel de bloque.
 *
 * Description (EN):
 * This file demonstrates the difference between "var" and "let"
 * regarding variable scope.
 * It shows how var has global or function scope,
 * while let has block-level scope.
 */
'use strict';

// Verifica que el archivo esté cargado correctamente
// Confirms that the file is loaded correctly
alert("Este archivo está cargado correctamente");

// Ejemplo usando var
// Example using var

// Declaración inicial
// Initial declaration
var numero = 40;

// Muestra el valor inicial
// Displays initial value
console.log("Aquí mi valor es de: " + numero);

if (true) {
	// Con var, la variable se sobreescribe globalmente
	// With var, the variable is overwritten globally
	var numero = 50;
	console.log("Aquí mi valor es de: " + numero);
}

// El valor fuera del bloque también cambia
// The value outside the block also changes
console.log("Aquí mi valor es de: " + numero); // 50

// Ejemplo usando let
// Example using let

// Variable global
// Global variable
var texto = "Practicas JS - Emiliano Reséndiz";
console.log(texto); // "Practicas JS - Emiliano Reséndiz"

if (true) {
	// Con let, la variable solo existe dentro del bloque
	// With let, the variable exists only inside this block
	let texto = "Practicas XXXX - Emiliano Reséndiz";
	console.log(texto); // "Practicas XXXX - Emiliano Reséndiz"
}

// Fuera del bloque mantiene su valor original
// Outside the block, it keeps its original value
console.log(texto); // "Practicas JS - Emiliano Reséndiz"

/*
Conclusión (ES):
let crea variables con alcance de bloque.
var crea variables con alcance global o de función.

Conclusion (EN):
let creates block-scoped variables.
var creates globally or function-scoped variables.
*/