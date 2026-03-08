'use strict'

/*
EJERCICIO: GESTIÓN DE PELÍCULAS CON LOCALSTORAGE
Este script permite:

1. Guardar películas ingresadas por el usuario
2. Almacenarlas en LocalStorage
3. Mostrar las películas guardadas en una lista HTML
4. Borrar películas desde LocalStorage

Se utilizan:

- Eventos de formularios
- Manipulación del DOM
- LocalStorage
*/

/*
CAPTURAR FORMULARIO PARA AGREGAR PELÍCULAS

Se selecciona el formulario que permite agregar
una nueva película.
*/

var formulario = document.querySelector("#formPelicula");

/*
EVENTO SUBMIT PARA GUARDAR PELÍCULAS

Cuando el usuario envía el formulario:

1. Se obtiene el valor del input
2. Se valida que no esté vacío
3. Se guarda en LocalStorage

La clave y el valor serán el mismo título.
*/

formulario.addEventListener('submit', function(){

   var titulo = document.querySelector('#addPelicula').value;      
   if(titulo.length >= 1){
        localStorage.setItem(titulo, titulo);
   }
});

/*
MOSTRAR PELÍCULAS GUARDADAS

Se recorre todo el contenido del LocalStorage
para mostrar las películas almacenadas en la lista.

Por cada elemento encontrado:

1. Se crea un elemento <li>
2. Se inserta el nombre de la película
3. Se añade a la lista HTML
*/

var ul = document.querySelector('#peliculasList');

for(var i in localStorage){
    console.log(localStorage[i]);
    // Verificar que el elemento sea un string
    if(typeof localStorage[i] == 'string'){
        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    } 
}

/*
FORMULARIO PARA BORRAR PELÍCULAS

Se selecciona el formulario que permite eliminar
una película del LocalStorage.
*/

var formularioBorrar = document.querySelector("#formBorrarPelicula");

/*
EVENTO SUBMIT PARA ELIMINAR PELÍCULAS

Cuando el usuario envía el formulario:

1. Se obtiene el título de la película
2. Se valida que no esté vacío
3. Se elimina del LocalStorage usando removeItem()
*/

formularioBorrar.addEventListener('submit', function(){

   var titulo = document.querySelector('#deletePelicula').value;   
   
   if(titulo.length >= 1){
        localStorage.removeItem(titulo);
   }

});