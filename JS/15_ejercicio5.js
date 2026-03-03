/**
 * Archivo: 15_ejercicio5.js
 *
 * Descripción (ES):
 * Este programa solicita un número al usuario y muestra
 * todos los números que son divisores exactos del valor ingresado.
 * Un divisor es aquel número que divide exactamente a otro
 * sin dejar residuo.
 *
 * Description (EN):
 * This program asks the user for a number and displays
 * all the numbers that are exact divisors of the entered value.
 * A divisor is a number that divides another number
 * without leaving a remainder.
 */

'use strict'

// Verifica que el archivo esté cargado correctamente
// Confirms that the file is loaded correctly
alert("Este archivo se cargó de la manera correcta (15_ejercicio5)");

/* 
   CAPTURA DE DATOS / DATA INPUT
*/

// Solicita un número y lo convierte a entero
// Requests a number and converts it to integer
var numero = parseInt(prompt("Mete un número", 1));


/*
 CÁLCULO DE DIVISORES / DIVISOR CALCULATION
*/

/*
Se utiliza un ciclo for desde 1 hasta el número ingresado.
Si el número se divide exactamente entre el valor actual
del ciclo, entonces ese valor es un divisor.

A for loop is used from 1 up to the entered number.
If the number divides exactly by the current loop value,
then that value is a divisor.
*/

for (var i = 1; i <= numero; i++) {

    // Verifica si el residuo de la división es cero
    // Checks if the remainder of the division is zero
    if (numero % i === 0) {

        console.log("Divisor: " + i);

    }
}