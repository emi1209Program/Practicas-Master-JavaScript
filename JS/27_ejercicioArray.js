'use strict'

// Mensaje que confirma que el archivo JS se cargó correctamente
alert("Este archivo se cargo de la manera correcta (27_ejercicioArray)");

/*
EJERCICIO COMPLETO CON ARRAYS

1. Pedir 6 números por pantalla y guardarlos en un array
2. Mostrar el array completo en la página y en consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuántos elementos tiene
6. Buscar un valor introducido por el usuario
*/

// Función para mostrar el contenido del array
// Recibe:
// - elementos → el array
// - textoCustom → texto opcional para indicar estado (ordenado, revertido, etc.)
function mostrarArray(elementos, textoCustom = ""){

	// Mostrar en el cuerpo del documento
	document.write("<h1>Contenido del array "+textoCustom+"</h1>");
	document.write("<ul>");

	// Recorre el array recibido
	elementos.forEach((elemento, index) => {
		document.write("<strong>"+elemento+"</strong<br/>");
	});

	document.write("</ul>");

	// Recorre el array global numero y lo vuelve a mostrar
	numero.forEach((numero, index) =>{
		document.write("<ul><li>");
		document.write("<strong>"+numero+"</strong><br/>");
		document.write("</ul></li>");
	});
}

// Punto 1: Crear y llenar array

var numero = [];

// Se piden 6 números al usuario
for(var i = 0; i <= 5; i++){
	numero.push(parseInt(prompt("Introduce un número: ", 0)));
}

// Punto 2: Mostrar array

mostrarArray(numero); // Mostrar en pantalla
console.log(numero);  // Mostrar en consola

// Punto 3: Ordenar array

// Orden numérico ascendente
numero.sort(function(a,b){ return a - b });

mostrarArray(numero, 'ordenado');

// Punto 4: Invertir array

numero.reverse();
mostrarArray(numero, 'revertido');

// Punto 5: Contar elementos


// length devuelve el número total de elementos
document.write("<h1>El array tiene: "+numero.length+" elementos");

// Punto 6: Buscar número

// Se pide al usuario un número a buscar
var busqueda = parseInt(prompt("Busca un número: ", 0));

/*
findIndex():
Devuelve la posición del elemento encontrado.
Si no lo encuentra devuelve -1.
*/
var posicion = numero.findIndex(numero => numero == busqueda);

// Verifica si fue encontrado
if(posicion && posicion != -1){
	document.write("<hr/><h1>Encontrado!!!</h1>");
	document.write("<h1>Posición de la busqueda: "+posicion+"<hr/></h1>");
}else{
	document.write("<hr>No encontrado encontrado!!!</hr>");
}