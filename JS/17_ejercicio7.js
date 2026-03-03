/**
 * Archivo: 17_ejercicio7.js
 *
 * Descripción (ES):
 * Este programa solicita un número al usuario y muestra
 * la tabla de multiplicar correspondiente del 1 al 10.
 * Posteriormente, genera y muestra todas las tablas
 * de multiplicar del 1 al 10 utilizando ciclos anidados.
 * La salida se imprime directamente en el documento HTML.
 *
 * Description (EN):
 * This program asks the user for a number and displays
 * its multiplication table from 1 to 10.
 * Afterwards, it generates and displays all multiplication
 * tables from 1 to 10 using nested loops.
 * The output is printed directly into the HTML document.
 */

'use strict'

// Verifica que el archivo esté cargado correctamente
// Confirms that the file is loaded correctly
alert("Este archivo se cargo de la manera correcta (17_ejercicio7)");

/*
 CAPTURA DE DATOS / DATA INPUT
*/

// Solicita un número al usuario y lo convierte a entero
// Requests a number from the user and converts it to integer
var numero = parseInt(prompt("¿De que numero quiere la tabla?", 1));

/* 
 TABLA DE MULTIPLICAR INDIVIDUAL
 SINGLE MULTIPLICATION TABLE
*/

/*
Se utiliza un ciclo for para generar la tabla
de multiplicar del número ingresado.

A for loop is used to generate the multiplication
table for the entered number.
*/

// Título de la tabla seleccionada
// Title for the selected table
document.write("<h1>Tabla de multiplicar del: " + numero + "</h1>");

for (var i = 1; i <= 10; i++) {
    document.write(i + " X " + numero + " = " + (i * numero) + "<br/>");
}

/*
   TODAS LAS TABLAS DE MULTIPLICAR
   ALL MULTIPLICATION TABLES
*/

/*
Se utilizan ciclos for anidados para generar
todas las tablas de multiplicar del 1 al 10.

Nested for loops are used to generate
all multiplication tables from 1 to 10.
*/

for (var c = 1; c <= 10; c++) {

    // Título de cada tabla
    // Title for each table
    document.write("<h1>Tabla de multiplicar del: " + c + "</h1>");

    for (var i = 1; i <= 10; i++) {
        document.write(i + " X " + c + " = " + (i * c) + "<br/>");

    }
}