'use strict'

/*
EJERCICIO DOM - EVENTOS Y MANIPULACIÓN
Archivo: 32_ejercicio_dom.js

Objetivo:
- Capturar datos de un formulario
- Escuchar el evento submit
- Mostrar los datos en pantalla usando el DOM
*/

window.addEventListener('load', function(){

    /*
    EVENTO LOAD
    
    Se ejecuta cuando todo el DOM ha sido cargado
    correctamente (HTML completamente disponible).
    */
    console.log("DOM Cargado...");

    /*
    SELECCIÓN DE ELEMENTOS PRINCIPALES
    */

    // Capturamos el formulario por su ID
    var formulario = this.document.querySelector("#formulario");

    // Capturamos el contenedor donde se mostrará la información
    var box_dashed = this.document.querySelector(".dashed");

    // Ocultamos inicialmente la caja de información
    box_dashed.style.display = "none";

    /*
    EVENTO SUBMIT DEL FORMULARIO
    */
    formulario.addEventListener('submit', function(){
        console.log("Evento submit capturado");

        /*
        CAPTURA DE VALORES DEL FORMULARIO
        .value obtiene el valor actual del input
        */

        var nombre  = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad = document.querySelector("#edad").value;

        /*
        Mostramos el contenedor de información
        una vez que el usuario envía el formulario
        */
        box_dashed.style.display = "block";

        /*
        SELECCIÓN DE LOS SPAN DONDE SE MOSTRARÁN LOS DATOS
        Se usa selector compuesto:
        #id span → selecciona el span dentro del párrafo
        */

        var pNombre = document.querySelector("#pNombre span");
        var pApellidos = document.querySelector("#pApellidos span");
        var pEdad = document.querySelector("#pEdad span");

        /*
        INSERTAR DATOS EN EL DOM
        innerHTML permite modificar el contenido interno
        del elemento seleccionado.
        */

        pNombre.innerHTML = nombre;
        pApellidos.innerHTML = apellidos;
        pEdad.innerHTML = edad;

    });
});