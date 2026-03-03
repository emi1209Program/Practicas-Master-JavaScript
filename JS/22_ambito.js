'use strict'

// Mensaje que confirma que el archivo JS se cargó correctamente
alert("Este archivo se cargo de la manera correcta (22_ambito)");

/*
ÁMBITO (SCOPE) EN JAVASCRIPT

El ámbito determina desde dónde podemos acceder
a una variable.

- Variables globales: se pueden usar en todo el archivo.
- Variables locales: solo existen dentro de la función
  donde fueron declaradas.
*/

function holaMundo(texto){
	
	// Variable local (solo existe dentro de esta función)
	var holamundo = "Texto dentro de función";

	// Muestra el parámetro recibido (usa la variable global "texto")
	console.log(texto);

	// Se usa la variable global "numero"
	// numero.toString() convierte el número en texto
	// typeof indica el tipo de dato resultante
	console.log(typeof numero.toString());

	// Muestra la variable local
	console.log(holamundo);
}

// Variable global (puede usarse dentro de la función)
var numero = 12;

// Variable global
var texto = "Hola mundo, soy una varible global";

// Se invoca la función y se envía la variable global "texto"
holaMundo(texto);