'use strict'

// Mensaje que confirma que el archivo se cargó correctamente
alert("Este archivo se cargo de la manera correcta (21_funcionesAnonima)");

/*
FUNCIONES ANÓNIMAS

Una función anónima es una función que no tiene nombre.
Se puede guardar en una variable o pasar como parámetro
a otra función.

Ejemplo (comentado):
Se guarda una función anónima dentro de la variable pelicula.
*/

/*
var pelicula = function(nombre){
	return "La pelicula es: "+nombre;
}
*/

/*
Función principal que recibe:
- numero1
- numero2
- sumaYmuestra (callback)
- sumaPorDos (callback)

Los últimos dos parámetros son funciones
que se ejecutarán dentro de sumame.
*/
function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
	
	// Se realiza la suma
	var sumar = numero1 + numero2;

	// Se ejecuta la función callback sumaYmuestra
	// enviándole el resultado de la suma
	sumaYmuestra(sumar);

	// Se ejecuta la función callback sumaPorDos
	// enviándole el resultado de la suma
	sumaPorDos(sumar);

	// Retorna el resultado de la suma
	return sumar;
}

/*
Invocación de la función sumame.

Aquí estamos pasando funciones anónimas tipo arrow function
como parámetros (callbacks).
*/
sumame(5, 2, 
	dato => {
		// Muestra la suma normal
		console.log("La suma es: ", dato);
	},
	dato => {
		// Muestra la suma multiplicada por 2
		console.log("La suma por dos es: ", (dato * 2));
	}
);