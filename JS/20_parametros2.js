'use strict'

// Mensaje que confirma que el archivo JS se cargó correctamente
alert("Este archivo se cargo de la manera correcta (20_ejercicio10)");

/*
PARÁMETROS REST Y SPREAD EN JAVASCRIPT

REST (...)
Permite recibir múltiples parámetros dentro de una función
y los agrupa en un arreglo.

SPREAD (...)
Permite expandir un arreglo en elementos individuales.
*/

// Función que recibe dos parámetros normales
// y el resto de los parámetros usando REST
function listadoFrutas(fruta1, fruta2, ...restoFruta){
	
	// Se muestran las dos primeras frutas
	console.log("Fruta 1:"+fruta1);
	console.log("Fruta 2:"+fruta2);

	// restoFruta es un arreglo que contiene
	// todas las frutas adicionales enviadas
	console.log(restoFruta);
}

// Llamada normal enviando varios argumentos
// Los dos primeros se asignan a fruta1 y fruta2
// Los demás se guardan en restoFruta
listadoFrutas("Naranja", "Manzada", "Sandia", "Platano");

// Arreglo de frutas
var frutas = ["Naranja", "Manzada" ];

/*
Uso del operador SPREAD (...)

Aquí se expanden los valores del arreglo "frutas"
como si fueran argumentos individuales:

"Naranja", "Manzada"
*/
listadoFrutas(...frutas, "Sandia", "Platano", "Coco");