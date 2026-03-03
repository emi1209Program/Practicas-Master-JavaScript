'use strict'
//alert("Este archivo se cargo de la manera correcta (28_dom)");

/*
DOM - DOCUMENT OBJECT MODEL

El DOM es la representación en forma de árbol del HTML.
Permite modificar elementos, estilos y contenido usando JavaScript.

Algunos métodos importantes:

- innerHTML → permite modificar o leer el contenido HTML interno.
- getElementsByTagName() → selecciona por nombre de etiqueta (div, p, etc).
- getElementsByClassName() → selecciona por nombre de clase.
- querySelector() → selecciona usando sintaxis tipo CSS.
*/

// Cambiar color dinámicamente

// Función que cambia el color de fondo de la caja
function cambiaColor(color){
	caja.style.background = color;
}

// Selección por ID

// Selecciona el elemento con id="miCaja"
var caja = document.querySelector("#miCaja");

// Modifica el contenido HTML interno
caja.innerHTML = "¡Texto en la caja desde JS";

// Modifica estilos directamente desde JS
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";

// Cambia la clase del elemento
caja.className = "Hola";

// Selección por etiqueta

// Obtiene todos los <div> del documento
var todosDiv = document.getElementsByTagName('div');

// Selecciona sección donde se insertarán nuevos elementos
var seccion = document.querySelector("#miSeccion");

// Crea un elemento <hr>
var hr = document.createElement("hr");

var valor;

// Recorre todos los divs
for(valor in todosDiv){

	// Verifica que tenga contenido de texto
	if(typeof todosDiv[valor].textContent == 'string'){

		// Crea un nuevo párrafo
		var parrafo = document.createElement("p");

		// Crea nodo de texto con el contenido del div
		var texto = document.createTextNode(todosDiv[valor].textContent);

		// Agrega el texto al párrafo
		parrafo.append(texto);

		// Inserta el párrafo dentro de la sección
		seccion.append(parrafo);
	}
}

// Agrega la línea horizontal al final
seccion.append(hr);

// Selección por clase

// Obtiene todos los elementos con clase "rojo"
var divsRojo = document.getElementsByClassName('rojo');

// Obtiene todos los elementos con clase "amarillo"
var divsAmarillo = document.getElementsByClassName('amarillo');

// Cambia el fondo del primer elemento amarillo
divsAmarillo[0].style.background = "yellow";

var div;

// Recorre los elementos con clase rojo
for(div in divsRojo){

	// Verifica que realmente tenga la clase "rojo"
	if(divsRojo[div].className == "rojo"){
		divsRojo[div].style.background = "red";
	}	
}

// Query Selector (CSS Selector)

// Selecciona elemento por ID
var id = document.querySelector("#encabezado");
console.log(id);

// Selecciona el primer div que encuentre
var etiqueta = document.querySelector("div");
console.log(etiqueta);

// Selecciona el primer div con clase "rojo"
var claseRojo = document.querySelector("div.rojo");
console.log(claseRojo);