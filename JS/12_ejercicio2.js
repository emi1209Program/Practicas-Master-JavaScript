/**
 * Archivo: 12_ejercicio2.js
 *
 * Descripción (ES):
 * Este programa solicita números al usuario de forma repetitiva.
 * Va acumulando la suma y contando cuántos números válidos fueron ingresados.
 * Cuando el usuario introduce un número negativo, el ciclo termina
 * y se muestran la suma total y la media (promedio).
 *
 * Description (EN):
 * This program repeatedly asks the user for numbers.
 * It accumulates the total sum and counts how many valid numbers were entered.
 * When the user enters a negative number, the loop stops
 * and the total sum and average are displayed.
 */

'use strict'

// Verifica que el archivo esté cargado correctamente
// Confirms that the file is loaded correctly
alert("Este archivo se cargó de la manera correcta (12_ejercicio2)");

/*
  DECLARACIÓN DE VARIABLES / VARIABLE SETUP
*/

// Variable acumuladora para almacenar la suma total
// Accumulator variable to store the total sum
var suma = 0;

// Variable contador para registrar la cantidad de números válidos
// Counter variable to track the amount of valid numbers
var contador = 0;

/* 
 BUCLE PRINCIPAL / MAIN LOOP
*/

/*
Se utiliza un ciclo do...while para asegurar que
el bloque se ejecute al menos una vez.

A do...while loop is used to ensure that
the block executes at least once.
*/

do {

    // Solicita un número al usuario (prompt devuelve string)
    // Asks the user for a number (prompt returns a string)
    var numero = parseInt(
        prompt('Introduce números hasta que metas uno negativo', 0)
    );

    /*
    Validación:
    - Si el valor no es numérico, se ignora.
    - Si el número es mayor o igual a cero, se acumula.
    - Un número negativo finaliza el ciclo.

    Validation:
    - If the value is not numeric, it is ignored.
    - If the number is greater than or equal to zero, it is accumulated.
    - A negative number ends the loop.
    */

    if (isNaN(numero)) {

        numero = 0;

    } else if (numero >= 0) {

        suma = suma + numero;
        // suma += numero;

        contador++;
    }

    // Salida en consola para seguimiento
    // Console output for tracking
    console.log(suma);
    console.log(contador);

} while (numero >= 0);

/* 
   RESULTADOS FINALES / FINAL RESULTS
*/

// Muestra la suma total acumulada
// Displays the total accumulated sum
alert("La suma de todos los números es: " + suma);

// Calcula y muestra la media
// Calculates and displays the average
alert("La media de todos los números es: " + (suma / contador));