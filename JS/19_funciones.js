/**
 * Archivo: 19_ejercicio9.js
 *
 * Descripción (ES):
 * Este programa define funciones reutilizables para realizar
 * operaciones matemáticas básicas entre dos números.
 * Dependiendo de un parámetro opcional, los resultados
 * pueden mostrarse en la consola o directamente en el documento HTML.
 *
 * Description (EN):
 * This program defines reusable functions to perform
 * basic mathematical operations between two numbers.
 * Depending on an optional parameter, the results
 * can be displayed in the console or directly in the HTML document.
 */

'use strict'

// Verifica que el archivo esté cargado correctamente
// Confirms that the file is loaded correctly
alert("Este archivo se cargo de la manera correcta (19_ejercicio9)");

/*
   DEFINICIÓN DE FUNCIONES AUXILIARES
   HELPER FUNCTION DEFINITIONS
*/

/*
Función que muestra los resultados en consola.

Function that displays results in the console.
*/
function porConsola(numero1, numero2){

	console.log("Suma: " + (numero1 + numero2));
	console.log("Resta: " + (numero1 - numero2));
	console.log("Multiplicación: " + (numero1 * numero2));
	console.log("División " + (numero1 / numero2));
	console.log("******************************");
}

/*
Función que muestra los resultados en el documento HTML.

Function that displays results in the HTML document.
*/
function porPantalla(numero1, numero2){

	document.write("Suma: " + (numero1 + numero2) + "<br/>");
	document.write("Resta: " + (numero1 - numero2) + "<br/>");
	document.write("Multiplicación: " + (numero1 * numero2) + "<br/>");
	document.write("División " + (numero1 / numero2) + "<br/>");
	document.write("******************************");
}

/* 
   FUNCIÓN PRINCIPAL
   MAIN FUNCTION
*/

/*
Función calculadora que recibe dos números
y un parámetro opcional llamado "mostrar".
Si "mostrar" es false, los resultados se envían a la consola.
Si es true, los resultados se muestran en pantalla.

Calculator function that receives two numbers
and an optional parameter called "mostrar".
If "mostrar" is false, results are sent to the console.
If it is true, results are displayed on screen.
*/

function calculadora(numero1, numero2, mostrar = false){

	// Conjunto de instrucciones a ejecutar
	// Set of instructions to execute
	if(mostrar == false){	

		porConsola(numero1, numero2);

	}else{

		porPantalla(numero1, numero2);
	}

	return true;
}

/*
 INVOCACIÓN DE FUNCIONES
 FUNCTION INVOCATION
*/

// Llamadas a la función calculadora con distintos parámetros
// Calls to the calculator function with different parameters
calculadora(1,4);
calculadora(12,9, true);
calculadora(4,5, true);
calculadora(89,50);

/*
Ejemplo adicional utilizando un ciclo para generar
múltiples operaciones automáticamente.

Additional example using a loop to generate
multiple operations automatically.
*/

/*
for(var i = 1; i<=10; i++){
	console.log(i);
	calculadora(i, 8);
}
*/