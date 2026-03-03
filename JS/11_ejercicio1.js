/**
 * Archivo: 11_ejercicio1.js
 *
 * Descripción (ES):
 * Este programa solicita dos números al usuario y determina
 * cuál es el mayor, cuál es el menor o si ambos son iguales.
 * Si los valores ingresados no son números o son menores
 * o iguales a cero, el sistema vuelve a solicitarlos.
 *
 * Description (EN):
 * This program asks the user for two numbers and determines
 * which one is greater, which one is smaller, or if they are equal.
 * If the entered values are not numbers or are less than or equal to zero,
 * the system asks for them again.
 */

'use strict';

// Confirmación de carga del archivo
alert("Este archivo se cargó de la manera correcta (11_ejercicio1)");

/* 
  Solicitud de datos al usuario
*/

var numero1 = parseInt(prompt("Introduce el primer número", 0));
var numero2 = parseInt(prompt("Introduce el segundo número", 0));

/* 
  Validación de datos
*/

while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
    
    alert("Los valores deben ser números mayores a 0");

    numero1 = parseInt(prompt("Introduce el primer número", 0));
    numero2 = parseInt(prompt("Introduce el segundo número", 0));
}

/* 
  Comparación de valores
*/

if (numero1 === numero2) {

    alert("Los números son iguales");

} else if (numero1 > numero2) {

    alert("El número mayor es: " + numero1);
    alert("El número menor es: " + numero2);

} else {

    alert("El número mayor es: " + numero2);
    alert("El número menor es: " + numero1);
}