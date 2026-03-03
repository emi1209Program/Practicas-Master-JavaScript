'use strict'

// Mensaje que confirma que el archivo JS se cargó correctamente
alert("Este archivo se cargo de la manera correcta (31_times)");

/*
TIMERS EN JAVASCRIPT
JavaScript permite ejecutar funciones después de cierto
tiempo o repetidamente usando:

- setTimeout()  → ejecuta una vez después de un tiempo.
- setInterval() → ejecuta repetidamente cada cierto tiempo.
- clearInterval() → detiene un setInterval().
*/

// Espera a que el DOM cargue completamente
window.addEventListener('load', function(){

	function intervalo(){
	// setInterval
	// Ejecuta la función cada 2000 milisegundos (2 segundos)

	var tiempo = setInterval(function(){

		console.log("Set interval ejecutado");

		// Selecciona el primer <h1> del documento
		var encabezado = document.querySelector("h1");

		// Alterna el tamaño de la fuente entre 50px y 30px
		if(encabezado.style.fontSize == "50px"){
			encabezado.style.fontSize = "30px";
		}else{
			encabezado.style.fontSize = "50px";
		}
	}, 2000); // 2000 ms = 2 segundos

	return tiempo;
	}

	var tiempo = intervalo();

	// Detener el intervalo
	// Selecciona el botón con id="stop"
	var stop = document.querySelector("#stop");

	// Cuando se haga click en el botón
	stop.addEventListener("click", function(){

		// Muestra alerta
		alert("Has parado el intervalo en bucle");

		// Detiene la ejecución repetitiva del setInterval
		clearInterval(tiempo);
	});

	var start = document.querySelector("#start");
	// Cuando se haga click en el botón
	start.addEventListener("click", function(){

		// Muestra alerta
		alert("Has empezado el intervalo en bucle");

		// Detiene la ejecución repetitiva del setInterval
		intervalo();
	});

});