/**
 * Archivo: 16_ejercicio6.js
 *
 * Descripción (ES):
 * Este programa solicita un número al usuario mediante una ventana prompt.
 * Si el valor ingresado no es numérico, el sistema volverá a solicitarlo
 * hasta que se introduzca un número válido.
 * Finalmente, determina si el número es par o impar
 * utilizando el operador módulo.
 *
 * Description (EN):
 * This program asks the user for a number using a prompt window.
 * If the entered value is not numeric, the system will request it again
 * until a valid number is provided.
 * Finally, it determines whether the number is even or odd
 * using the modulus operator.
 */

'use strict'

// Verifica que el archivo esté cargado correctamente
// Confirms that the file is loaded correctly
alert("Este archivo se cargo de la manera correcta (16_ejercicio6)");

/* 
 CAPTURA DE DATOS / DATA INPUT
*/

// Solicita un número al usuario y lo convierte a entero
// Requests a number from the user and converts it to integer
var numero = parseInt(prompt("Intorduce un numero", 0));

/* 
 VALIDACIÓN DE ENTRADA / INPUT VALIDATION
*/

/*
Mientras el valor ingresado no sea numérico,
se volverá a solicitar el número.

While the entered value is not numeric,
the system will request the number again.
*/

while (isNaN(numero)) {
	numero = parseInt(prompt("Intorduce un numero", 0));	
}

/* 
 EVALUACIÓN DE PARIDAD / EVEN-ODD EVALUATION
*/

/*
Se verifica si el número es divisible entre 2.
Si el residuo es cero, el número es par.
En caso contrario, es impar.

The program checks if the number is divisible by 2.
If the remainder is zero, the number is even.
Otherwise, it is odd.
*/

if (numero %2 == 0){
	alert("Es un numero par");
}else{
	alert("Es un numero impar");
}