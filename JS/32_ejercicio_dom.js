'use strict'

/*
EJERCICIO DOM - EVENTOS Y MANIPULACIÓN
Archivo: 32_ejercicio_dom.js

Objetivo del ejercicio:
- Capturar datos desde un formulario
- Escuchar el evento submit
- Validar los datos introducidos por el usuario
- Mostrar los datos en pantalla usando el DOM
*/

window.addEventListener('load', function(){

    /*
    EVENTO LOAD

    Este evento se ejecuta cuando todo el DOM ha sido
    cargado correctamente (HTML completamente disponible).
    */

    console.log("DOM Cargado...");

    /*
    SELECCIÓN DE ELEMENTOS PRINCIPALES
    */

    // Capturamos el formulario mediante su ID
    var formulario = this.document.querySelector("#formulario");

    // Capturamos el contenedor donde se mostrará la información del usuario
    var box_dashed = this.document.querySelector(".dashed");

    // Ocultamos inicialmente el contenedor de información
    box_dashed.style.display = "none";

    /*
    EVENTO SUBMIT DEL FORMULARIO

    Este evento se ejecuta cuando el usuario envía el formulario
    */

    formulario.addEventListener('submit', function(){

        console.log("Evento submit capturado");

        /*
        CAPTURA DE VALORES DEL FORMULARIO
        .value obtiene el valor actual introducido en el input
        */

        var nombre  = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad = document.querySelector("#edad").value;


        /*
        VALIDACIÓN DEL CAMPO NOMBRE

        trim() elimina espacios en blanco al inicio y final
        length verifica que el campo no esté vacío
        */

        if(nombre.trim() == null || nombre.trim().length == 0){

            alert('Completa los campos correspondientes...');

            // Mostramos mensaje de error en el DOM
            document.querySelector("#error_nombre").innerHTML = "El nombre es incorrecto";

            return false;

        }else{

            // Ocultamos el mensaje de error si el campo es válido
            document.querySelector("#error_nombre").style.display = "none";
        };

        /*
        VALIDACIÓN DEL CAMPO APELLIDOS
        */

        if(apellidos.trim() == null || apellidos.trim().length == 0){

            alert('Completa los campos correspondientes...');
            return false;

        };

        /*
        VALIDACIÓN DEL CAMPO EDAD
        Se valida que:
        - No sea null
        - No sea menor o igual a 0
        - Sea un número válido
        */

        console.log(edad);

        if(edad == null || edad <= 0 || !isNaN(edad)){

            alert('Completa los campos correspondientes...');
            return false;
        };


        /*
        MOSTRAR CONTENEDOR DE INFORMACIÓN
        Una vez que los datos son válidos, mostramos la caja
        donde se imprimirá la información del usuario
        */

        box_dashed.style.display = "block";

        /*
        SELECCIÓN DE ELEMENTOS DONDE SE MOSTRARÁN LOS DATOS

        Se utiliza un selector compuesto:

        #id span → selecciona el <span> dentro del párrafo
        */

        var pNombre = document.querySelector("#pNombre span");
        var pApellidos = document.querySelector("#pApellidos span");
        var pEdad = document.querySelector("#pEdad span");

        /*
        INSERCIÓN DE DATOS EN EL DOM
        innerHTML permite modificar el contenido interno
        de un elemento HTML.
        */

        pNombre.innerHTML = nombre;
        pApellidos.innerHTML = apellidos;
        pEdad.innerHTML = edad;

    });
});