/**
 * Archivo: 18_ejercicio8.js
 *
 * Descripción (ES):
 * Este programa funciona como una calculadora básica.
 * Solicita dos números al usuario y valida que sean valores correctos.
 * Si alguno de los datos es inválido o negativo, se vuelven a solicitar.
 * Posteriormente, muestra el resultado de las operaciones básicas
 * (suma, resta, multiplicación y división) en el documento,
 * en una alerta y en la consola.
 *
 * Description (EN):
 * This program works as a basic calculator.
 * It asks the user for two numbers and validates that the values are correct.
 * If any of the inputs is invalid or negative, they are requested again.
 * Afterwards, it displays the results of basic operations
 * (addition, subtraction, multiplication, and division)
 * in the document, in an alert, and in the console.
 */

'use strict'

// Verifica que el archivo esté cargado correctamente
// Confirms that the file is loaded correctly
alert("Este archivo se cargo de la manera correcta (18_ejercicio8)");

/* 
 CAPTURA DE DATOS / DATA INPUT
*/

// Solicita dos números al usuario y los convierte a enteros
// Requests two numbers from the user and converts them to integers
var numero1 = parseInt(prompt("Introduce el primer numero: ", 0));
var numero2 = parseInt(prompt("Introduce el segundo numero: ", 0));


/* 
 VALIDACIÓN DE DATOS / DATA VALIDATION
*/

/*
Si alguno de los valores es negativo o no es numérico,
se volverán a solicitar ambos números.

If any of the values is negative or not numeric,
both numbers will be requested again.
*/

while (numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)) {

	numero1 = parseInt(prompt("Introduce el primer numero: ", 0));
	numero2 = parseInt(prompt("Introduce el segundo numero: ", 0));
}

/*
 OPERACIONES MATEMÁTICAS / MATHEMATICAL OPERATIONS
*/

/*
Se construyen dos variables tipo string que almacenan
los resultados de las operaciones básicas.
Una utiliza etiquetas HTML para mostrarse en el documento
y la otra utiliza saltos de línea para consola o alertas.

Two string variables are created to store
the results of basic operations.
One uses HTML tags to display in the document,
and the other uses line breaks for console or alerts.
*/

var resultado = "La suma es: " + (numero1 + numero2) + "<br/>" +
				"La resta es: " + (numero1 + numero2) + "<br/>" +
				"La multiplicación es: " + (numero1 * numero2) + "<br/>" +
				"La división es: " + (numero1 / numero2) + "<br/>";

var resultado2 = "La suma es: " + (numero1 + numero2) + " \n" +
				"La resta es: " + (numero1 + numero2) + " \n" +
				"La multiplicación es: " + (numero1 * numero2) + " \n" +
				"La división es: " + (numero1 / numero2) + " \n";


/*
 SALIDA DE RESULTADOS / OUTPUT RESULTS
*/

// Muestra resultados en el documento HTML
// Displays results in the HTML document
document.write(resultado);

// Muestra resultados adicionales en el documento
// Displays additional results in the document
document.write(resultado2);

// Muestra resultados en la consola
// Displays results in the console
console.log(resultado2);