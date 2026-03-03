/**
 * Archivo: 07_switch.js
 *
 * Descripción (ES):
 * Este archivo demuestra el uso de la estructura switch en JavaScript.
 * Se utiliza para evaluar múltiples casos basados en el valor de una
 * variable y ejecutar un bloque específico dependiendo de la coincidencia.
 *
 * Description (EN):
 * This file demonstrates the use of the switch statement in JavaScript.
 * It is used to evaluate multiple cases based on the value of a variable
 * and execute a specific block depending on the match.
 */

'use strict';

// Verifica que el archivo esté cargado correctamente
// Confirms that the file is loaded correctly
alert("Este archivo cargó de manera correcta (07_switch)");

// Variable a evaluar
// Variable to evaluate
var edad = 28;

// Variable donde se almacenará el resultado
// Variable where the result will be stored
var imprime = "";

/*
Switch:
Permite evaluar múltiples condiciones comparando un valor
contra diferentes casos (case).

Switch:
Allows evaluating multiple conditions by comparing a value
against different cases.
*/

switch (edad) {

	case 18:
		imprime = "Acabas de cumplir la mayoría de edad";
		break;

	case 25:
		imprime = "Ya eres un adulto";
		break;

	case 40:
		imprime = "Crisis de los cuarenta";
		break;

	case 60:
		imprime = "Ya eres un abuelo";
		break;

	case 75:
		imprime = "Ya eres un dinosaurio";
		break;

	default:
		imprime = "Tu edad no coincide con los casos definidos";
		break;
}

// Muestra el resultado del switch
// Displays the result of the switch
console.log(imprime);

// Mensaje adicional informativo
// Additional informational message
console.log("Tienes: " + edad + " años, no entra en el programa");