'use strict'

// Mensaje que confirma que el archivo JS se cargó correctamente
alert("Este archivo se cargo de la manera correcta (29_dom)");

/*
BOM - Browser Object Model

El BOM permite interactuar con el navegador,
no con el HTML directamente (eso sería el DOM).

Permite acceder a objetos como:
- window
- screen
- location
- history
- navigator
*/

// Obtener información del navegador

function getBom(){

	// screen.width → ancho total de la pantalla del usuario
	console.log(screen.width);

	// screen.height → alto total de la pantalla del usuario
	console.log(screen.height);	

	// window.location.href → URL actual de la página
	console.log(window.location.href);
}

// Redireccionar página

// Cambia la URL actual por la que se pase como parámetro
function redirect(url){
	window.location.href = url;
}

// Abrir nueva ventana

// window.open abre una nueva ventana o pestaña
// Parámetros:
// 1. URL
// 2. Nombre de la ventana (vacío en este caso)
// 3. Configuración (ancho y alto)
function abrirVentana(url){
	window.open(url, "", "width=400, height=300");
}

// Se ejecuta la función para mostrar la información del navegador
getBom();