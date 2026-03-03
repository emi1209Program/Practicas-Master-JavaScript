/**
 * Archivo: 14_ejercicio4.js
 *
 * Descripción (ES):
 * Este programa solicita dos números al usuario y muestra
 * todos los números impares comprendidos entre ellos.
 * La verificación de número impar se realiza utilizando
 * el operador módulo.
 *
 * Description (EN):
 * This program asks the user for two numbers and displays
 * all the odd numbers between them.
 * The odd number validation is performed using
 * the modulus operator.
 */

'use strict'

// Verifica que el archivo esté cargado correctamente
// Confirms that the file is loaded correctly
alert("Este archivo se cargó de la manera correcta (14_ejercicio4)");

/*
  CAPTURA DE DATOS / DATA INPUT
*/

// Solicita el primer número y lo convierte a entero
// Requests the first number and converts it to integer
var numero1 = parseInt(prompt("Introduce el primer número", 0));

// Solicita el segundo número y lo convierte a entero
// Requests the second number and converts it to integer
var numero2 = parseInt(prompt("Introduce el segundo número", 0));

/* 
  BUCLE DE RECORRIDO / ITERATION LOOP
*/

/*
Se utiliza un ciclo while para recorrer el rango
desde el primer número hasta el segundo número.

A while loop is used to iterate from
the first number to the second number.
*/

while (numero1 < numero2) {

    // Se incrementa el valor antes de evaluarlo
    // The value is incremented before evaluation
    numero1++;

    /*
    Validación de número impar:
    Si el residuo de la división entre 2 es diferente de 0,
    el número es impar.

    Odd number validation:
    If the remainder of the division by 2 is not zero,
    the number is odd.
    */
    if (numero1 % 2 !== 0) {

        console.log("El " + numero1 + " es impar");

    }
}