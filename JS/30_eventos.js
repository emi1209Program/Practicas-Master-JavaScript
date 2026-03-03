'use strict'

// Mensaje que confirma que el archivo JS se cargó correctamente
alert("Este archivo se cargo de la manera correcta (30_eventos)");

/*
EVENTOS EN JAVASCRIPT
Un evento es una acción que ocurre en la página,
como hacer click, mover el mouse o presionar una tecla.

addEventListener permite escuchar eventos
y ejecutar una función cuando ocurren.
*/

// Espera a que toda la página cargue antes de ejecutar el código
window.addEventListener('load', () =>{

	// Evento Click (Botón)

	function cambiaColor(){
		console.log("Me has dado click");

		// Guarda el color actual del botón
		var bg = boton.style.background;

		// Cambia entre verde y rojo
		if(bg == "green"){
			boton.style.background = "red";	
		}else{
			boton.style.background = "green";	
		}

		// Modifica estilos adicionales
		boton.style.padding = "10px";
		boton.style.border = "1px solid #ccc";

		return true;
	}

	// Selecciona el botón por su ID
	var boton = document.querySelector("#boton");

	// Evento CLICK
	boton.addEventListener('click', function(){
		cambiaColor();
	});

	// Eventos del Mouse
	
	// Mouse Over (cuando el cursor entra al botón)
	boton.addEventListener("mouseover", function(){
		boton.style.background = "yellow";
	});

	// Mouse Out (cuando el cursor sale del botón)
	boton.addEventListener("mouseout", function(){
		boton.style.background = "#ccc";
	});

	// Eventos del Input

	// Selecciona el input por su ID
	var input = document.querySelector("#campo_nombre");

	// Focus → cuando el usuario entra al input
	input.addEventListener("focus", function(){
		console.log("[focus] Estas adentro del input");
	});

	// Blur → cuando el usuario sale del input
	input.addEventListener("blur", function(){
		console.log("[blur] Estas afuera del input");
	});

	// Eventos del Teclado

	// Keydown → cuando se presiona una tecla
	input.addEventListener("keydown", function(event){
		console.log("[keydown] pulsando esta tecla", 
			String.fromCharCode(event.keyCode));
	});

	// Keypress → cuando la tecla está siendo presionada
	input.addEventListener("keypress", function(event){
		console.log("[keypress] Tecla presionada", 
			String.fromCharCode(event.keyCode));
	});

	// Keyup → cuando se suelta la tecla
	input.addEventListener("keyup", function(event){
		console.log("[keyup] Tecla soltada", 
			String.fromCharCode(event.keyCode));
	});
});