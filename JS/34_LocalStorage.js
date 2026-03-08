'use strict'

/*
LOCALSTORAGE en JS

LocalStorage es una API del navegador que permite
almacenar información en el navegador del usuario
de forma persistente.

Los datos guardados permanecen incluso si se cierra
el navegador o se recarga la página.

Capacidad aproximada: 5MB por dominio.

Métodos principales:

- localStorage.setItem()  → guardar datos
- localStorage.getItem()  → recuperar datos
- localStorage.removeItem() → eliminar un elemento
- localStorage.clear() → eliminar todo el almacenamiento
*/


/*
COMPROBAR DISPONIBILIDAD DE LOCALSTORAGE

Se verifica si el navegador del usuario soporta
la API de LocalStorage.
*/

if(typeof(Storage) !== 'undefined'){
    console.log("LocalStorage disponible");
}else{
    console.log("Incompatible con LocalStorage");
}

/*
GUARDAR DATOS EN LOCALSTORAGE
Se guarda un dato simple utilizando clave y valor.
*/

localStorage.setItem("titulo", "Practicas de JS de Emiliano Resendiz");

/*
RECUPERAR DATOS DE LOCALSTORAGE
getItem() obtiene el valor asociado a una clave.
*/

document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

/*
GUARDAR OBJETOS EN LOCALSTORAGE

LocalStorage solo puede almacenar strings.
Por lo tanto, cuando se quiere guardar un objeto
de JavaScript es necesario convertirlo a JSON
usando JSON.stringify().
*/

var usuario = {
    nombre: "Emiliano",
    email: "emiliano.rs998@gmail.com",
    web: "https://github.com/emi1209Program?tab=repositories"
}

localStorage.setItem("usuario", JSON.stringify(usuario));

/*
RECUPERAR OBJETOS DE LOCALSTORAGE

Para recuperar el objeto debemos convertir nuevamente
el string JSON a un objeto de JavaScript utilizando
JSON.parse().
*/

var userjs = JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);

/*
MOSTRAR DATOS EN EL DOM

Se insertan algunos datos del objeto recuperado
dentro del contenedor HTML con id="datos".
*/

document.querySelector("#datos").append(userjs.web + " - " + userjs.nombre);

/*
ELIMINAR DATOS DEL LOCALSTORAGE

clear() elimina todos los elementos almacenados
en LocalStorage para ese dominio.
*/

localStorage.clear();